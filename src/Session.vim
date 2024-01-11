let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Desktop/apache/SvelteTube/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +9 app.html
badd +6 routes/+page.svelte
badd +49 Components/Navigation.svelte
badd +27 Components/HomePage.svelte
badd +32 Components/PopularCarousel.svelte
badd +12 Components/TrendingVideos.svelte
badd +4 routes/+layout.svelte
badd +1 Components/Footer.svelte
badd +20 routes/watch/youtube/\[videoId]/+page.svelte
badd +8 routes/watch/youtube/\[videoId]/+page.js
badd +57 global.css
badd +2 Replies.svelte
badd +1 routes/watch/youtube/\[videoId]/Reply.svelte
badd +17 routes/watch/youtube/\[videoId]/Comment.svelte
badd +33 routes/watch/youtube/\[videoId]/Replies.svelte
argglobal
%argdel
$argadd app.html
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit routes/watch/youtube/\[videoId]/Replies.svelte
argglobal
balt routes/watch/youtube/\[videoId]/Comment.svelte
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
7
normal! zo
17
normal! zo
18
normal! zo
19
normal! zo
20
normal! zo
21
normal! zo
23
normal! zo
28
normal! zo
33
normal! zo
38
normal! zo
39
normal! zo
44
normal! zo
48
normal! zo
52
normal! zo
58
normal! zo
64
normal! zo
let s:l = 34 - ((11 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 34
normal! 09|
lcd ~/Desktop/apache/SvelteTube/src
tabnext
edit ~/Desktop/apache/SvelteTube/src/routes/watch/youtube/\[videoId]/+page.svelte
argglobal
balt ~/Desktop/apache/SvelteTube/src/routes/watch/youtube/\[videoId]/+page.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
8
normal! zo
14
normal! zo
18
normal! zo
22
normal! zo
33
normal! zo
37
normal! zo
38
normal! zo
39
normal! zo
42
normal! zo
44
normal! zo
45
normal! zo
47
normal! zo
52
normal! zo
53
normal! zo
58
normal! zo
59
normal! zo
60
normal! zo
67
normal! zo
68
normal! zo
78
normal! zo
80
normal! zo
86
normal! zo
87
normal! zo
88
normal! zo
89
normal! zo
91
normal! zo
92
normal! zo
94
normal! zo
101
normal! zo
103
normal! zo
107
normal! zo
108
normal! zo
109
normal! zo
116
normal! zo
118
normal! zo
119
normal! zo
122
normal! zo
125
normal! zo
126
normal! zo
129
normal! zo
130
normal! zo
137
normal! zo
138
normal! zo
143
normal! zo
151
normal! zo
155
normal! zo
160
normal! zo
166
normal! zo
171
normal! zo
177
normal! zo
184
normal! zo
189
normal! zo
195
normal! zo
199
normal! zo
210
normal! zo
214
normal! zo
221
normal! zo
230
normal! zo
237
normal! zo
245
normal! zo
250
normal! zo
255
normal! zo
262
normal! zo
266
normal! zo
271
normal! zo
272
normal! zo
276
normal! zo
280
normal! zo
let s:l = 7 - ((6 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 7
normal! 030|
lcd ~/Desktop/apache/SvelteTube/src
tabnext 1
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
