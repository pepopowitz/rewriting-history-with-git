Layout: module

# Rewriting Old Commits

## I did something a few commits ago that I want to rewrite.

Notes:

- not just "change" -- _rewrite_.
- If you just want to undo and don't care about rewriting history, you can use a revert commit

---

Trail: Rewriting old commits

## Interactive Rebasing

---

Trail: Rewriting old commits,Interactive rebasing

IMAGE: rebasing and watching the wheel replay on another head

Notes:

we talked about rebasing, as this thing we do to move a branch head

---

Trail: Rewriting old commits,Interactive rebasing

IMAGE: rebasing and watching the wheel replay on itself

Notes:

but there's no reason we couldn't do a rebase against the head we're already pointed at

but what would be the point of that?

---

Trail: Rewriting old commits,Interactive rebasing

IMAGE: rebasing and watching the wheel replay on itself with something other than "pick"

Notes:

well, what if we were to replay on the head we're already pointed at,

but do different things with the commits we're replaying?

---

Trail: Rewriting old commits,Interactive rebasing

IMAGE: rebasing and watching the wheel replay with a manifest

Notes:

and that's exactly what interactive rebasing is

- we replay our current branch onto a head, which one isn't important
- we give git a manifest specifying what to do with each commit in the branch
- and git rebases & applies the actions we specify

---

Trail: Rewriting old commits,Interactive rebasing

### Resolution

- `git rebase -i main`

IMAGE: an interactive rebase in terminal

Notes:

- in practice, it looks like this:

- note that the default is to "pick" each commit.

  - if you don't change any, it is the same as a plain non-interactive rebase

- note that you can abort from the rebase interactive screen by exiting without saving `:q!`
- to continue, save the file `:wq`

---

Trail: Rewriting old commits,Interactive rebasing ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

Notes:

the SHAs are changing again!

---

Trail: Rewriting old commits,Interactive rebasing ⚠️

## Case: "I want to reorder the commits in this branch"

IMAGE: reordering commits in an interactive rebase

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

### Resolution

#### `git rebase -i main`

#### swap lines

IMAGE: swapping lines in an interactive rebase

Notes:

find VIM commands for moving lines

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

### Real-life Examples

- I want my PR to tell a story 📖
<!-- .element: class="fragment" -->
- I want my PR to be a useful guide for someone doing something similar in the future 📝
<!-- .element: class="fragment" -->

Notes:

Even if you go from 7-6-8 to 6-7-8, and both end up with the code being the same at 8, you'll end up with a new commit for 8!

The SHA of 6 and 7 changed, so 8 does too!

---

Trail: Rewriting old commits,Interactive rebasing ⚠️

## Case: "I want to remove a commit from this branch"

IMAGE: dropping commits in an interactive rebase

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Removing commits

### Resolution

#### `git rebase -i`

#### `drop`/`d`

IMAGE: dropping commits in an interactive rebase

Notes:

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Removing commits

### Real-life Examples

- I made a quick fix and committed it in my branch but someone else did it better in another branch 🤗
<!-- .element: class="fragment" -->
- I made a commit that I just don't want anymore 🗑
<!-- .element: class="fragment" -->

Notes:

ability to drop through interactive rebase gives you freedom to mess around and try things out,

and not worry about people seeing your experiments

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

## Case: "I want to update a commit in this branch"

IMAGE: updating a commit in an interactive rebase

Notes:

remember that if it's the latest you can use `git commit --amend` without rebasing

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

### Resolution

#### `git rebase -i main`

#### `edit`/`e`

IMAGE: editing in an interactive rebase
Notes:

- make the changes
- `git commit --amend` (or make a new commit)
- `git rebase --continue`

- you can edit multiple commits while rebasing
- if you do multiple, you'll repeat the "make changes, amend, continue" loop until they're all complete

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

### Real-life Examples

- I want to give credit where credit is due! 🍐
<!-- .element: class="fragment" -->
- I accidentally included a comment or debugging statement in a previous commit 🐛
<!-- .element: class="fragment" -->

---

Trail: Rewriting old commits,Interactive rebasing ⚠️

## Case: "I want to combine some older commits into one"

IMAGE: squashing commits in an interactive rebase

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Combining commits

### Resolution

#### `git rebase -i main`

#### `squash`/`s` or `fixup`/`f`

Notes:

- diff between s and f is that squash will preserve the squashed commit messages as notez

- git will ask you to edit the message if you squash

- `git rebase --continue`

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Combining commits

### Real-life Examples

- I missed part of a previous commit until later 😮
<!-- .element: class="fragment" -->
- I want my PR to tell a story 📗
<!-- .element: class="fragment" -->
- I want my PR to be a useful guide for someone doing something similar in the future 📝
<!-- .element: class="fragment" -->

Notes:

---

TODO: figure out how to talk about conflicts

- need to deal with any conflicts along the way
  - make changes
  - commit them
  - `git rebase --continue`

TODO: maybe a complicated interactive rebase to show it all coming together?

---
