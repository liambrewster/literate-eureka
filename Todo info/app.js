let input = prompt('What would you like to do')
const todos = ['Collect Trash', 'send Emails']


while (input !== 'quit') {
    if (input === 'list') {
        console.log('##########')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}; ${todos[i]}`)
        }
        console.log('##########')
    } else if (input === 'new') {
        const addtodo = prompt('what is the new todo?')
        todos.push(addtodo)
        console.log(`${addtodo} has been added`)
    } else if (input === 'delete') {
        console.log('##########')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}; ${todos[i]}`)
        }
        console.log('##########')
        const deltodo = prompt('which do we delete')
        todos.splice(deltodo, 1)
        console.log('deleted')
    }

    input = prompt('now, What would you like to do')
}
console.log('you quit the app')