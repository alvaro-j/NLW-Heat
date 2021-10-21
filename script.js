const getGithubData = async () => {
  const userURL = "http://api.github.com/users/alvaro-j";
  const res = await fetch(userURL);
  const data = await res.json();
  console.log(data);
}

getGithubData();