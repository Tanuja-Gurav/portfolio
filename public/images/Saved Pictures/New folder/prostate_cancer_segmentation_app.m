function prostate_cancer_segmentation_app()
    % --- Prostate Cancer Detection App ---
    clc; close all;

    % Step 1: Let user select an image
    [file, path] = uigetfile({'*.jpg;*.png;*.tif'}, 'Select Prostate MRI Image');
    if isequal(file,0)
        disp('No file selected. Exiting...');
        return;
    end
    img = imread(fullfile(path,file));
    
    % Step 2: Convert to grayscale (if needed)
    if size(img,3)==3
        gray_img = rgb2gray(img);
    else
        gray_img = img;
    end

    % Step 3: Preprocessing (Noise reduction)
    img_filt = medfilt2(gray_img,[3 3]);

    % Step 4: Segmentation (using Otsu thresholding)
    level = graythresh(img_filt);
    bw = imbinarize(img_filt, level);

    % Step 5: Morphological operations (clean up)
    bw = imfill(bw,'holes');
    bw = bwareaopen(bw, 100);

    % Step 6: Overlay Segmentation on Original Image
    mask = imoverlay(img, bw, [1 0 0]); % red overlay for detected area

    % Step 7: Show results
    figure;
    subplot(1,3,1); imshow(img); title('Original Image');
    subplot(1,3,2); imshow(bw); title('Segmented Region');
    subplot(1,3,3); imshow(mask); title('Detected Prostate Cancer Area');
end

% Helper function for overlay
function out = imoverlay(img, mask, color)
    % Convert to RGB if grayscale
    if size(img,3)==1
        img = cat(3, img, img, img);
    end
    out = img;
    color = uint8(color*255);
    red = out(:,:,1); green = out(:,:,2); blue = out(:,:,3);
    red(mask)   = color(1);
    green(mask) = color(2);
    blue(mask)  = color(3);
    out = cat(3, red, green, blue);
end
