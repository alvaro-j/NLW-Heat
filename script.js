const getGithubData = async () => {
  const userURL = "http://api.github.com/users/alvaro-j";
  const res = await fetch(userURL);
  const data = await res.json();
  githubUserPhoto.src = data.avatar_url;
  githubName.innerHTML = data.name;
  githubUserURL.href = data.html_url;
  githubUserName.innerHTML = data.login;
  githubBio.innerHTML = data.bio;
}

getGithubData();