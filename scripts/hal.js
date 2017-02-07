module.exports = function (robot) {
  robot.respond(/open the pod bay doors/i, function (res) { 
    var name = res.message.user.profile.first_name

    res.send("I'm sorry " + name + "...")

    setTimeout(function () {
      res.send("I'm afraid I can't do that")
    }, 3000)

  })
 

}
