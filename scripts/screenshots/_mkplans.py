import json
P='scripts/screenshots/plans/'
VP={"width":1440,"height":900}
def opencol(name):
    return [{"click":'th.js-col:has-text("%s") .nt-sheet__colset'%name},
            {"click":'.el-dropdown-menu__item:visible:has-text("Column settings")'},{"wait":900}]
def settype(t):
    return [{"click":".nt-drawer .el-select"},{"click":'.el-select-dropdown__item:visible:has-text("%s")'%t},{"wait":500},{"eval":"document.activeElement&&document.activeElement.blur()"}]
def tag(text,name,up=1):
    js=("(()=>{let best=null;document.querySelectorAll('.nt-drawer *').forEach(e=>{if(e.innerText&&e.innerText.includes(%s)&&(!best||e.innerText.length<=best.innerText.length))best=e});"
        "let t=best;for(let i=0;i<%d;i++)t=t.parentElement;t.setAttribute('data-hl','%s')})()")%(json.dumps(text),up,name)
    return {"eval":js}
def shot(name,clip="viewport",**k):
    d={"name":name,"clip":clip};d.update(k);return {"shot":d}
def plan(slug,cat,steps):
    json.dump({"doc":"docs/field-types/%s.md"%slug,"outDir":"public/images/field-types/%s"%slug,"viewport":VP,"steps":steps},open(P+slug+'.json','w'),indent=2)
HL=lambda s:{"highlights":[s]}
TBL={"element":".ninja_table_wrapper","pad":6}
HIDE={"eval":"document.querySelectorAll('.ninja_table_wrapper tbody tr:nth-child(n+9)').forEach(r=>r.style.display='none');document.querySelectorAll('.ninja_table_wrapper tr.footable-paging, .ninja_table_wrapper .dataTables_paginate').forEach(r=>r.style.display='none')"}

plan('actionable-button-link',0,[
 {"admin":"/tables/{{Course Catalog}}"},{"wait":2000}]+opencol("Enroll")+[
 shot("1.-Column-Dialog-With-Type-Set",highlights=[{"row":"Button text","part":"row"}]),
 {"click":'.nt-drawer label:has-text("Open link in a new tab")'},{"click":'.nt-drawer label:has-text("Rounded corners")'},{"click":'.nt-drawer label:has-text("nofollow")'},
 tag("Border","colors",3),
 shot("2.-Button-Link-Options-With-Colors",highlights=['[data-hl="colors"]']),
 {"click":'.nt-drawer button:has-text("Cancel")'},{"wait":600},
 {"click":'button:has-text("Add data")'},{"wait":1000},
 {"fill":{"selector":'.nt-drawer input[placeholder="https://"]',"value":"https://example.com/courses/wordpress-for-beginners"}},
 tag("The link this cell","url",1),
 shot("3.-Row-Drawer-Showing-The-Link-Field",highlights=['[data-hl="url"]']),
 {"front":"{{page:Online Courses}}/"},{"wait":800},HIDE,
 shot("4.-Table-With-Styled-Buttons",TBL)])

plan('date-field',0,[
 {"admin":"/tables/{{Conference Schedule}}"},{"wait":2000}]+opencol("Date")+[
 shot("1.-Column-Dialog-With-Type-Set",highlights=[{"row":"Date format","part":"row"}]),
 {"click":'.nt-drawer :text-is("Custom")'},
 {"fill":{"selector":'.nt-drawer input[placeholder="e.g. dddd, MMMM Do YYYY"]',"value":"dddd, MMMM Do YYYY"}},
 shot("2.-Custom-Date-Format-Box",highlights=[{"row":"Date format","part":"row"}]),
 {"click":'.nt-drawer button:has-text("Cancel")'},{"wait":600},
 {"click":"tbody tr:nth-child(3) td:nth-child(2)"},{"wait":600},
 {"click":".el-date-editor input"},{"wait":800},
 shot("3.-Calendar-Date-Picker-Open",highlights=[".el-picker-panel"]),
 {"front":"{{page:WordCamp Schedule 2026}}/"},{"wait":800},HIDE,
 shot("4.-Table-With-A-Date-Field-Column",TBL)])

plan('html-field',0,[
 {"admin":"/tables/{{Employee Directory}}"},{"wait":2000}]+opencol("Office")+settype("HTML field")+[
 tag("trusted","note",1),
 shot("1.-Column-Dialog-With-Type-Set",highlights=['[data-hl="note"]'])])

plan('image-file-lightbox',0,[
 {"admin":"/tables/{{Product Price List}}"},{"wait":2000},
 {"click":'button:has-text("Add column")'},{"wait":900},
 {"fill":{"selector":'.nt-drawer input >> nth=0',"value":"Product Image"}}]+settype("Image/File/Lightbox")+[
 shot("1.-Column-Dialog-With-Type-Set",highlights=[{"row":"When visitors click the image","part":"row"}]),
 {"click":'.nt-drawer .el-select:has-text("Image only")'},{"wait":600},
 shot("2.-Click-Behavior-Options-For-An-Image")])

plan('numeric-value',0,[
 {"admin":"/tables/{{Product Price List}}"},{"wait":2000}]+opencol("Price")+settype("Numeric value")+[
 shot("1.-Column-Dialog-With-Type-Set",highlights=[{"row":"Separator style","part":"row"}]),
 {"front":"{{page:Shop Price List}}/"},{"wait":800},
 {"click":'th.ninja_clmn_nm_price'},{"wait":800},HIDE,
 shot("2.-Table-With-A-Numeric-Column-Sorted",TBL)])

plan('select-field',0,[
 {"admin":"/tables/{{Course Catalog}}"},{"wait":2000}]+opencol("Level")+[
 shot("1.-Column-Dialog-With-Type-Set",highlights=[{"row":"Select items","part":"row"}]),
 {"click":'.nt-drawer button:has-text("Cancel")'},{"wait":600},
 {"click":'button:has-text("Add data")'},{"wait":1000},
 {"click":".nt-drawer .el-select"},{"wait":600},
 shot("2.-Select-Dropdown-Open-In-The-Row"),
 {"front":"{{page:Online Courses}}/"},{"wait":800},HIDE,
 shot("3.-Table-With-A-Select-Field-Column",TBL)])

plan('single-line-text-field',0,[
 {"admin":"/tables/{{Employee Directory}}"},{"wait":2000}]+opencol("Name")+[
 shot("1.-Column-Dialog-With-Type-Set",highlights=[".nt-drawer .el-select"])])

plan('text-area',0,[
 {"admin":"/tables/{{Course Catalog}}"},{"wait":2000}]+opencol("Course")+settype("Text area")+[
 shot("1.-Column-Dialog-With-Type-Set",highlights=[".nt-drawer .el-select"])])
