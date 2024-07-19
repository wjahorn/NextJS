Created by William Horn 15/07/24

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

NodeJS and TailwindCSS need to be installed for this app.



## Getting Started

Naviagate to the "pokefetch" folder that is downloaded from this repository.
Then run "npm install" to install the necessary dependencies for the project.
Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
*Mine worked with npm run dev*


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Latest update allows for image and info of individual pokemon to be displayed when clicking on their name.

*Note the buttons to change pages only work if you click on the text (I couldn't work out how to get the whole button to be the link).*


## Assumptions and Decisions

I assumed that the pokemon to be displayed on each page was at my discretion so I did it by generation according to List of Pokemon on Wikipedia.
I also assumed that the styling with TailwindCSS was again at my discretion so I used some different colours and hover animations to try out different things and try and neaten up parts of the pages.
