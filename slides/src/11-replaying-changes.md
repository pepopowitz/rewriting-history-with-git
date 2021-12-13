Layout: module

# Moving Commits

## I want to move commits to a different branch.

---

Trail: Moving commits

## Case: "I want to copy specific commits into another branch"

IMAGE: moving a cherry-picked commit from one branch to another

---

Trail: Moving commits,Copy commits from another branch

### Resolution

#### `git cherry-pick a1a1a1a1`

IMAGE: cherry pick applied to the end

Notes:

this will select a commit from anywhere in your log, and apply it to the end of your current branch

---

Trail: Moving commits

## Case: "I want to move the head of my branch to another starting point"

IMAGE: moving a branch head

---

Trail: Moving commits,Moving branch head ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

Notes:

even though the contents of the commits we're moving haven't changed,

the code they're based on is different

so the SHAs are different

---

Trail: Moving commits,Moving branch head ⚠️

## Merging vs rebasing

IMAGE: merging
IMAGE: rebasing

Notes:

when we say "move the branch head" we mean rebasing

merging applies the other branch to the end of this one, as a new "merge commit"

rebasing is like winding the wheel of git back a few turns, then checking out a different commit, then letting the wheel spin back forward

---

Trail: Moving commits,Rebasing a branch ⚠️

### Resolution

- `git rebase some-identifier`

Notes:

- identifier can be a branch name, a SHA, a tag, a relative reference like HEAD~2....

---

Trail: Moving commits,Rebasing a branch ⚠️

### Real-life Examples

- new changes have been merged to main and I want my branch based on latest 🤗
<!-- .element: class="fragment" -->
- created a branch from the wrong commit/branch and I want to move it 🚛
<!-- .element: class="fragment" -->

---
