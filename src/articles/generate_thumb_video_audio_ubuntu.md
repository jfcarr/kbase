# Generating Thumbnails for Video and Audio Files In Ubuntu

Source: <https://askubuntu.com/questions/948175/no-mp3-thumbnail-album-art-cover-when-using-ffmpegthumbnailer-in-ubuntu-gnome>

Install Totem (if it isn't already):

```bash
sudo apt install totem
```

Back up your thumbnailer configurations:

```bash
sudo cp /usr/share/thumbnailers/totem.thumbnailer /usr/share/thumbnailers/totem.thumbnailer.backup

sudo cp /usr/share/thumbnailers/ffmpegthumbnailer.thumbnailer /usr/share/thumbnailers/ffmpegthumbnailer.thumbnailer.backup
```

Replace /usr/share/thumbnailers/totem.thumbnailer with this:

```txt
[Thumbnailer Entry]
TryExec=/usr/bin/totem-video-thumbnailer
Exec=/usr/bin/totem-video-thumbnailer -s %s %u %o
MimeType=audio/x-pn-realaudio;audio/3gpp;audio/3gpp2;audio/aac;audio/ac3;audio/AMR;audio/AMR-WB;audio/basic;audio/dv;audio/eac3;audio/flac;audio/m4a;audio/midi;audio/mp1;audio/mp2;audio/mp3;audio/mp4;audio/mpeg;audio/mpg;audio/ogg;audio/opus;audio/prs.sid;audio/scpls;audio/vnd.rn-realaudio;audio/wav;audio/webm;audio/x-aac;audio/x-aiff;audio/x-ape;audio/x-flac;audio/x-gsm;audio/x-it;audio/x-m4a;audio/x-matroska;audio/x-mod;audio/x-mp1;audio/x-mp2;audio/x-mp3;audio/x-mpg;audio/x-mpeg;audio/x-ms-asf;audio/x-ms-asx;audio/x-ms-wax;audio/x-ms-wma;audio/x-musepack;audio/x-pn-aiff;audio/x-pn-au;audio/x-pn-wav;audio/x-pn-windows-acm;audio/x-realaudio;audio/x-real-audio;audio/x-s3m;audio/x-sbc;audio/x-shorten;audio/x-speex;audio/x-stm;audio/x-tta;audio/x-wav;audio/x-wavpack;audio/x-vorbis;audio/x-vorbis+ogg;audio/x-xm;application/x-flac;
```

Replace /usr/share/thumbnailers/ffmpegthumbnailer.thumbnailer with this:

```txt
[Thumbnailer Entry]
TryExec=ffmpegthumbnailer
Exec=ffmpegthumbnailer -i %i -o %o -s %s -f -m
MimeType=video/jpeg;video/mp4;video/mpeg;video/quicktime;video/x-ms-asf;video/x-ms-wm;video/x-ms-wmv;video/x-ms-asx;video/x-ms-wmx;video/x-ms-wvx;video/x-msvideo;video/x-flv;video/x-matroska;application/mxf;video/3gp;video/3gpp;video/dv;video/divx;video/fli;video/flv;video/mp2t;video/mp4v-es;video/msvideo;video/ogg;video/vivo;video/vnd.divx;video/vnd.mpegurl;video/vnd.rn-realvideo;video/vnd.vivo;video/webm;video/x-anim;video/x-avi;video/x-flc;video/x-fli;video/x-flic;video/x-m4v;video/x-mpeg;video/x-mpeg2;video/x-nsv;video/x-ogm+ogg;video/x-theora+ogg
```
