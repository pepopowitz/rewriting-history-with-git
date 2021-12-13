Layout: module

# Stages of Work

Notes:

stages can be represented by a game I like to call...

---

<!-- .slide: data-background="/images/wheelofgit.svg" -->

Trail: Stages of work

Notes:

the stages of working in git are like a wheel

you move through the stages by spinning the wheel

---

<!-- .slide: data-background="/images/wheel-1-static.svg" -->

Trail: Stages of work,Wheel! Of! Git!

Notes:

you have no local changes.

---

<!-- .slide: data-background="/images/wheel-1-2-animated.svg" -->

Trail: Stages of work,Wheel! Of! Git!

Notes:

once you change some files and save them,

the wheel spins forward one section

and we're now in the "modified" or "untracked" state

modified: a file already in the repository has been updated

untracked: a new file has been added that is not yet in the repository

---

<!-- .slide: data-background="/images/wheel-2-3-animated.svg" -->

Trail: Stages of work,Wheel! Of! Git!

Notes:

then we can move our changes to a "staging" area

this moves us forward to the `staged` sector of the wheel

---

<!-- .slide: data-background="/images/wheel-3-1-animated.svg" -->

Trail: Stages of work,Wheel! Of! Git!

Notes:

and then we commit those staged changes

and the wheel is back where it started,

in an "unmodified" position, but pointed at a different commit

---

Trail: Stages of work,Wheel! Of! Git!

## Transitioning states

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

### 1-2

IMAGE: transitioning from 1 to 2

#### Save your changes

IMAGE: gst modified/untracked

Notes:

When you save them, Git automatically detects your changes.

If you've saved changes to an existing file, the changes enter the Modified state.

If you've saved changes to a new file, the file enters the Untracked state.

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

### 2-3

IMAGE: transitioning from 2 to 3

#### `git add ./path-to-add`

IMAGE: gst staged

Notes:

`path-to-add` can be an individual filename,

a folder that contains multiple modified/untracked files,

or even `.` to represent adding _all_ changed files.

...

Once you've staged your changes, you can check your local working status with `git status`. The results will look like this:

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

### 3-1 (forward)

IMAGE: transitioning from 3 to 1 (forward)

#### `git commit -m "This is my commit message"`

IMAGE: gst unmodified

Notes:

With our changes staged, we can write a commit to our Git history.

There are many flags and arguments you can use in the `git commit` command.

My favorite flavor is this one

...

We can see our new commit in our log, by checking the status:

and we're now back at stage 1 of the wheel!

Pointed at a particular commit, with no local changes.

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

IMAGE: wheel showing multiple rotations/commits

Notes:

As we continue our work, we follow this wheel of...

making changes

saving them

staging them

committing them

And with each commit, we build a history of changes.

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

### 2-1 (forward)

IMAGE: transitioning from 2 to 1 (forward)

#### `git commit -a -m "My commit message"`

Notes:

You might be comfortable enough with changes that you want to skip the staging area

it is possible to directly commit modified files.

The `git commit` command includes a `-a` argument that will add all Modified changes

...

for untracked you need to add them to staging area first

(but you can assign an alias to do this all in one command)

...

This used to be my default mode -- just go from modified/untracked to committed

because what's the point of staging?

But the staging area gives you control over what gets committed

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

LineNumbers: 1-2|3-4

### Why use the staging area?

IMAGE: demonstrate two logical commits in my changes

```bash
git add ./calendar.js
git commit -m "Update calendar with new rules"
git add ./user-profile.js
git commit -m "Update user profile with new design"
```

Notes:

You can stage a subset of your changes

TODO: find a place to mention that you can have changes in both staged & unstaged states

And if you've made a bunch of changes that feel like they're logically two separate commits,

stage some of them and commit those, then commit the rest of the changes separately.

This suggests that different changes can be in different stages of the wheel

which is absolutely true!

...

this is how we ADD changes....and if you're using git, you're likely pretty familiar with this.

But you can also spin the wheel backward -- roll back a commit, unstage work, ...

And this is where we're going to start rewriting history.

---
