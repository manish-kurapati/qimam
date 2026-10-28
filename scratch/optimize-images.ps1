# scratch/optimize-images.ps1
Add-Type -AssemblyName System.Drawing

function Resize-ImageFile {
    param(
        [string]$Path,
        [int]$MaxWidth,
        [int]$MaxHeight,
        [int]$Quality = 92
    )
    $fullPath = Resolve-Path $Path
    $src = [System.Drawing.Image]::FromFile($fullPath)
    
    $ratioX = $MaxWidth / $src.Width
    $ratioY = $MaxHeight / $src.Height
    $ratio = [Math]::Min($ratioX, $ratioY)
    
    if ($ratio -ge 1.0) {
        $src.Dispose()
        Write-Output "Skipped (already within bounds): $Path"
        return
    }
    
    $newW = [int]($src.Width * $ratio)
    $newH = [int]($src.Height * $ratio)
    
    $dest = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, 0, 0, $newW, $newH)
    
    $src.Dispose()
    
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
    
    $tmpPath = "$fullPath.tmp"
    $dest.Save($tmpPath, $codec, $encoderParams)
    $dest.Dispose()
    $g.Dispose()
    
    Move-Item -Path $tmpPath -Destination $fullPath -Force
    $fileSize = (Get-Item $fullPath).Length / 1KB
    Write-Output "Resized $Path -> ${newW}x${newH} (${fileSize:N1} KB)"
}

Resize-ImageFile -Path "assets/project-featured-park.jpg" -MaxWidth 1600 -MaxHeight 1000 -Quality 92
Resize-ImageFile -Path "assets/project-qiddiya-cut.jpg" -MaxWidth 1200 -MaxHeight 800 -Quality 92
Resize-ImageFile -Path "assets/project-nri-foundation.jpg" -MaxWidth 1200 -MaxHeight 800 -Quality 92
Resize-ImageFile -Path "assets/project-neom-zone.jpg" -MaxWidth 1200 -MaxHeight 800 -Quality 92
