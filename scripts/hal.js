module.exports = (robot) => {
  robot.respond(/open the pod bay doors/i, (res) => { 
    const name = res.message.user.profile.first_name

    res.send(`I'm sorry ${name}...`)

    setTimeout(() => {
      res.send("I'm afraid I can't do that")
    }, 3000)

  })
 

}
