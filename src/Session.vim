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
badd +72 routes/+page.svelte
badd +95 Components/Navigation.svelte
badd +19 Components/HomePage.svelte
badd +149 Components/PopularCarousel.svelte
argglobal
%argdel
$argadd app.html
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit Components/PopularCarousel.svelte
argglobal
balt Components/HomePage.svelte
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
10
normal! zo
12
normal! zo
17
normal! zo
19
normal! zo
25
normal! zo
26
normal! zo
27
normal! zo
28
normal! zo
29
normal! zo
35
normal! zo
36
normal! zo
35
normal! zo
36
normal! zo
43
normal! zo
44
normal! zo
46
normal! zo
47
normal! zo
48
normal! zo
47
normal! zc
26
normal! zc
60
normal! zo
64
normal! zo
60
normal! zc
73
normal! zo
83
normal! zo
93
normal! zo
99
normal! zo
103
normal! zo
114
normal! zo
122
normal! zo
132
normal! zo
142
normal! zo
146
normal! zo
151
normal! zo
159
normal! zo
167
normal! zo
174
normal! zo
175
normal! zo
180
normal! zo
184
normal! zo
188
normal! zo
let s:l = 57 - ((41 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 57
normal! 09|
lcd ~/Desktop/apache/SvelteTube/src
tabnext
edit ~/Desktop/apache/SvelteTube/src/Components/PopularCarousel.svelte
argglobal
balt ~/Desktop/apache/SvelteTube/src/routes/+page.svelte
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
10
normal! zo
12
normal! zo
17
normal! zo
19
normal! zo
25
normal! zo
26
normal! zo
27
normal! zo
28
normal! zo
29
normal! zo
35
normal! zo
36
normal! zo
35
normal! zo
36
normal! zo
43
normal! zo
44
normal! zo
46
normal! zo
47
normal! zo
48
normal! zo
51
normal! zo
26
normal! zc
60
normal! zo
64
normal! zo
65
normal! zo
73
normal! zo
83
normal! zo
93
normal! zo
103
normal! zo
114
normal! zo
122
normal! zo
132
normal! zo
142
normal! zo
146
normal! zo
151
normal! zo
174
normal! zo
175
normal! zo
180
normal! zo
184
normal! zo
188
normal! zo
let s:l = 175 - ((20 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 175
normal! 0
lcd ~/Desktop/apache/SvelteTube/src
tabnext 2
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
