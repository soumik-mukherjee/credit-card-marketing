## Users

- Me : The maintainer of this boilerplate code base. I am repsonsible for adding any new features, reference code, samples, vulnerability fixes etc. to the boilerplate that will make your life easier

- You : A user of this boilerplate, who adds code specific to your use cases and business needs. You **should not** be required to change the boilerplate, and should be able to manage your customizations independently

In the ideal world, our paths should never cross. Meaning the boilerplate should be independent of `your` needs, and vice versa. While at the same time, you should be able to **pull in** improvements made to this boilerplate

To keep things the ideal way, its imeprative you understand the directory structure, which ones are upto you, which ones aren't.

Also, there is 3 parts to this boilerplate:

1. Stuff that is absolutely imperative for things to work (i.e. the `core`)
2. Stuff that glue your code to the core (i.e. `api`).
3. Stuff that are essentially `recipes` for you to base your work on. You can safely remove these

## Directory Layout

- `src/core` - Common functions and modules that work under the hood for you. You will **never need** to use them or change them in any way. These will be updated whenever you pull in new changes from this boilerplate. If you see a bug in any of these, feel free to reach out and raise an issue in my repository

- `src/api` - Common functions and modules that you will end up using in your code (i.e `import` in your code). You **should not** need to do any changes here. These will be updated whenever you pull in new changes from this boilerplate. If you see a bug in any of these, feel free to reach out and raise an issue in my repository

- `src/images` - Inherited from the `gatsby-default-starter` template. Some boilerplate code (`recipes`) might use them. Otherwise left upto to you manage, in your code base

- `src/pages` - Static gatsby pages, this folder is a shared ownership between `you` and `me`. The boilerplate owns the `app.js`, `index.js`, `404.js` & `signIn.js` files. You can edit these files (if you know what you are doing) but **do not delete them**. You can obviously add more pages here per your needs, and manage them yourselves.

For most use cases (i.e. assuming you are trying to come up with a `web application`), you will only need to edit the `app.js` file. More on that later.

- `src/components/core` - 

- `src/components/api` - 

- `src/component/pages` - Client side pages, in contrast to the `src/pages` directory, anything in here will **not be** pre-rendered by gatsby. Rather, this is the place to put any page level composites (i.e. React components) that your `client side routes` will use. Also look at `app.js` in conjunction, to better understand this.
The components in here, may just be simple wrappers on top of any `imports` from the `ui-components` project. This is where you would do any `REST API` calls etc. (i.e. side effects) to pass data into pure components (which you would ideally have developed in the `ui-components` project)

## Tips on managing Do's and Dont's

Without assuming too much about your team, I would say there is typically going to be two levels of skills in you team:

- Leads - The ones who understand gatsby to a fair extent 
- Fullstack developers - 