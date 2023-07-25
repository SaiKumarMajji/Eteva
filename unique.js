List1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan']
List2=[ 'Adwait','Laxman','Amit', 'Adnan','Nitin','Gaurav']

//Get a unique set of users from List1 which are not in List2

function uniqueUsersList1(List1, List2) {
    const users = List1.filter(user => !List2.includes(user))
    return users
}

const uniqueList1 = uniqueUsersList1(List1, List2)
console.log(uniqueList1)


//Get a unique set of users from List2 which are not in List1


function uniqueUsersList2(List1, List2) {
    const users = List2.filter(user => !List1.includes(user))
    return users
}

const uniqueList2 = uniqueUsersList2(List1, List2)
console.log(uniqueList2)

//Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)

function combineLists(List1, List2) {
    const users = List1.filter(user => List2.includes(user))
    return users
}

const combine = combineLists(List1, List2)
console.log(combine)