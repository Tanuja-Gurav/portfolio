% ---------------------------------------------------
% Prostate Cancer Segmentation with User-Selected Image
% ---------------------------------------------------

% Ask user to select an MRI image
[filename, pathname] = uigetfile({'*.png;*.jpg;*.jpeg;*.tif','Image Files'}, ...
                                 'Select an MRI Image');
if isequal(filename,0)
    disp('User canceled image selection.');
    return;
else
    imgPath = fullfile(pathname, filename);
    I = imread(imgPath);
end

% Resize to match U-Net input size
I = imresize(I, [224 224]);
figure; imshow(I); title('Original MRI Image');

% Load pretrained/trained U-Net model
load('trainedUNet.mat', 'net');

% Perform segmentation
C = semanticseg(I, net);

% Extract cancer region
BW = C == 'cancer';   % adjust class name if different

% Post-processing
BW = imfill(BW, 'holes');
BW = bwareaopen(BW, 50);

% Show segmentation result
figure;
imshow(labeloverlay(I, BW, 'Transparency',0.6));
title('Prostate Cancer Segmentation');

% Show boundary outline
B = bwperim(BW);
overlay = imoverlay(I, B, [1 0 0]); % red boundary
figure;
imshow(overlay);
title('Prostate Cancer Boundary');
