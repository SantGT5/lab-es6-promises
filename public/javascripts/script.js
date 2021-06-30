// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log("first" + steak[i])
// }

// Iteration 1 using callbacks
// for(let i = 0; i < steak.length; i++){
//   addFood(steak[i], '#steak')

// }

addFood(steak[0], '#steak', () => {

  addFood(steak[1], '#steak', () => {

    addFood(steak[2], '#steak', () => {

      addFood(steak[3], '#steak', () => {

        addFood(steak[4], '#steak', () => {

          addFood(steak[5], '#steak', () => {

            addFood(steak[6], '#steak', () => {

              addFood(steak[7], '#steak', () => {

              })
            })
          })
        })
      })
    })
  })
});




// for(let steakList of steak){
//   addFood(steakList, '#steak')
// }
// addFood(steak[0], '#steak', () => {

//   addFood(steak[1], '#steak', () => {

//   })
// });



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')
  .then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes')
      })
    })
  })
});


// Iteration 3 using async/await

  async function makeFood(steps) {
    try{
      let result = await addFood(brusselSprouts[0], '#brusselSprouts')
      addFood(brusselSprouts[1], '#brusselSprouts')
      
    }catch(err){
      console.log(err)
    }
    
  }
  makeFood(brusselSprouts);
