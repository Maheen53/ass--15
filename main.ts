let guestlist : string [] =["SHIBRA" , "SHAHMEER" ,"MAHIR" ]

//print the name who cant make a dinner


let unableattend : string = guestlist.splice(1 , 1)[0];

console.log(`${unableattend} who cant attend a dinner`)

//push

guestlist.push("Eda Yeildise")

console.log(guestlist)

//pop

guestlist.forEach(guest => {
    console.log(`dear ${guest} your are cordially invited in dinner`)
})