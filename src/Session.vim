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
badd +12 routes/+page.svelte
badd +13 Components/Navigation.svelte
badd +55 Components/HomePage.svelte
badd +103 Components/TrendingVideos.svelte
badd +44 routes/search/+page.svelte
badd +6 routes/search/+page.server.js
badd +49 routes/search/Anime.svelte
badd +9 routes/anime/\[animeId]/+page.svelte
badd +5 routes/anime/\[animeId]/+page.server.js
badd +45 routes/watch/anime/\[episodeId]/+page.svelte
badd +8 routes/watch/anime/\[episodeId]/+page.js
badd +63 routes/watch/anime/\[episodeId]/Video.svelte
badd +0 app.html
argglobal
%argdel
$argadd app.html
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit Components/HomePage.svelte
argglobal
balt routes/+page.svelte
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
2
normal! zo
14
normal! zo
14
normal! zo
17
normal! zo
17
normal! zo
31
normal! zo
31
normal! zo
let s:l = 50 - ((22 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 50
normal! 0
lcd ~/Desktop/apache/SvelteTube/src
tabnext
edit ~/Desktop/apache/SvelteTube/src/Components/HomePage.svelte
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
2
normal! zo
14
normal! zo
14
normal! zo
17
normal! zo
17
normal! zo
31
normal! zo
31
normal! zo
41
normal! zo
45
normal! zo
48
normal! zo
52
normal! zo
55
normal! zo
let s:l = 42 - ((15 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 42
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
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
