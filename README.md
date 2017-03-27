# MP4Analyzer

Simple Javascript parser of MP4 files with following features:
1. extraction of all MP4 boxes (their type and size)
2. extraction of content of mdat box
3. extraction and preview of images in HTML page contained in mdat boxes data

Limitations/presumtions:
1. only boxes of type moof and traf contain other boxes
2. mdat box won't exceed 4 GB in size
3. images can be extracted only if mdat box data type is UTF-8 encoded XML and images are saved inside tag smpte:image
4. GUI won't show download progress which could mean waiting without any GUI changes in case of downloading bigger files
