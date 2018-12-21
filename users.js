users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]
function userLanguages(users)
{
  for(var user = 0; user < users.length; user++)
    {
      userinfo = users[user].fname + " " + users[user].lname + " knows "
      for(var lang = 0; lang < users[user].languages.length; lang++)
        {
          if(lang == users[user].languages.length-1)
            {
              userinfo+= "and " + users[user].languages[lang] + "."
            }
          else
            {
              userinfo+= users[user].languages[lang] + ", "
            }
        }
      console.log(userinfo);
      interests = users[user].fname + " is also interested in "
      for(var interest in users[user].interests)
        {
          for(var i = 0; i < users[user].interests[interest].length; i++)
            {
              interests += users[user].interests[interest][i] + " ";
            }
        }
      console.log(interests);
    }
}
result = userLanguages(users);