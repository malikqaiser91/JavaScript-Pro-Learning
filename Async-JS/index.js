/*
    Asynchronous JavaScript:
    1) Callback Function:
        A callback function is a function passed to another function, and it is invoked into that function , for it to call.
        They are used for many things in JS.
        They are used for following purposes:
            1) Functional programming patterns like array function filters , map etc.
                const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

                const eventNumber = numbers.filter((num) => num % 2 === 0)

                console.log(eventNumber)
            2) Event Driven Programming , most commonly working with DOM events.
                register a function to be called when an event happens.
                const btn = document.querySelector("#btn")
                function sayHi(){
                    alert('Hello')
                }
                btn.addEventListener("click",sayHi)
            3) Asynchronous code.
            call those callbacks when asynchronous operation completes.
                const sayHi = () => console.log('Hi!')

                setTimeout(sayHi, 3000)
                setInterval(sayHi, 1000)

            Callback will always be useful for event-driven programming and functional programming patters.

            ##############################################
            Callback Hell & The Pyramid of Doom:
                JavaScript is single-threaded, only one bit of code can run at once.
                We have to work with async code , and treat is specially

                Sequential code can lead to hard-to-understand code:
                This pyramid of doom also called callback hell.

                We can flatten that by using non-anonymous functions:

                ajaxLib.get('/step-1,function (req){
                    ajaxLib.get('/step-2',{req,body},function(res){
                        ajaxLib.get('/step-3',{res,body},function(data){
                            console.log('got final answer')
                        })
                    })
                })
        ##############################################
        Promises in JavaScript:
            Promises provide an alternative way to think about asynchronicity.
            A promise is one time guarantee of future value.
            Promises are future value , they are used to represent the eventual success or failure of an asynchronous operation. 
            They allowed us to write cleaner async code , compose and chain async operation together.
            Easier to handle errors , making it easier to handle complex async flow throughout our code.
            Fundamental part of modern javascript environment.

            Promise in JS is object.
            A promise can be in one of three states.
                1) Pending: It doesn't have the value yet.
                2) Resolved: It has successfully obtained a value.
                3) Rejected: Failed to obtain the value.

            const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
            const url = `${BASE_URL}/1`

            fetch(url).then((res) => res.json())
*/
