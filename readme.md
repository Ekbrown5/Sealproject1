## Description on Project

A paragraph discussing the idea of your project, the API you are using and desired user experience.

> I am creating a Rick and Morty character search page using the Rick and morty API.  You type any characters name from the show and a picture of that character followed by their status, and species.  

## Details about the API

Give me a brief description of the API you are using and how you plan on using it. Does it use some sort of authentication like an APIkey. List some of the urls are using below.

- `https://rickandmortyapi.com/documentation/#rest`: This API does not require a key.  This returns a json array with every Rick and Morty character along with their name, status, species, type, gender, name, picture and location



Sample Fetch/Ajax called:


 fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data.results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

#### Desktop View

![My Desktop View](https://i.imgur.com/5Bs7N6B.png)

#### Mobile View

![My Mobile View](https://i.imgur.com/5Bs7N6B.png)


DEPLYOYED SITE: [Click Here](https://sealproject1.vercel.app/)


## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | | I chose the alternate project
| Sun | Build fetch of data in JS file || I waited for an updated video of contentful
| Mon | Render data from API on screen ||  I reviewed the videos to futher understand contentful
| Tues| Build form for user to interact with || I strugged to understand contentful
| Wed | wrap up functionality ||  I made a late pivot to rick and morty 
|Thurs| mobile layout styling ||  I reviewed the prevous class video and got started with html and css
| Fri | Desktop layout styling || struggled to get the functionality to work but finally got something
| Sat | Present Project ||
