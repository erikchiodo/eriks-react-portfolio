# Erik’s React Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/mit)
## Description

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```
## Table of Contents

- [Story](#story)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Screenshots](#screenshots)
- [Questions](#questions)

## Story

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Installation

npm, react, material ui, roboto

## Usage

You'll need to create package.json by npm installing in eriks-portfolio repo. Then, run npm start. This will start the application. If you navigate to localhost:3000 it will direct to the About page.
## License

Erik's-React-Portfolio is licensed under [MIT](https://opensource.org/licenses/mit).

## Contributing

No contributors (aside from author)

## Tests

No tests

## Screenshots
When you are directed to the site, you'll first see my landing page. This includes an About Me description, self image, and links to my linkedin, github, and instagram. When you click on these links they will redirect you to the appropriate endpoint.
![Screen Shot 2023-06-28 at 10 56 59 PM](https://github.com/erikchiodo/eriks-react-portfolio/assets/122952630/fed4756f-1d5d-41bf-bee3-7487badb9708)

When you click on "Portfolio" tab, you'll be directed to my portfolio page. It includes images and a short description of the projects/assignments I've worked on during the Bootcamp. When you click on the image, you are redirected to the deployed application. When you click on the github icon you are redirected to the github repo. 

![Screen Shot 2023-06-28 at 10 57 10 PM](https://github.com/erikchiodo/eriks-react-portfolio/assets/122952630/858300fd-cfee-4a4b-a0ea-e05747d7fa83)

When you click on the "Contact" tab, you are redirected to a page that asks you for Name, email, and message. For each of these fields it has a validation on it. If it's blank and you hit submit, it will post an error at the bottom. Note, that my conditional statements have logic that will only post the first error it sees. For example if you type in name and leave email or message blank, it will only post error for the email.

![Screen Shot 2023-06-28 at 11 02 44 PM](https://github.com/erikchiodo/eriks-react-portfolio/assets/122952630/8de2c399-a91f-4997-902a-01bc836cc538)

Lastly, if you redirect you to the "Resume" tab, it will show you a page with a clickable link that will display my resume. It also lists my core competancies for reference.

![Screen Shot 2023-06-28 at 10 57 27 PM](https://github.com/erikchiodo/eriks-react-portfolio/assets/122952630/f1e245dd-2f1d-4621-b947-4f4947b081b4)


## Questions

Link to [Erik's React Portfolio](https://github.com/erikchiodo/eriks-react-portfolio)

Link to [Live App]()

If you need to contact me directly, here's my email: erikchiodo@gmail.com!

