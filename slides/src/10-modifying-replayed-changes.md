Layout: module

# Replaying Changes With Modifications

## I did something a few commits ago that I want to change.

- and I want to rewrite it out of history (so a revert commit wasn't what you wanted)

---

Trail: Replaying changes With modifications

## Detour: Interactive Rebasing

- note that if you just "pick" everything it is the same as rebasing non-interactively
- note that when rewriting commits, the SHAs are changed!!!
  - be extra careful when pushing this!!!
- note that you can abort from the rebase interactive screen by exiting without saving (`:q!`)
- to continue, save the file (`:wq`)

---

Trail: Replaying changes With modifications

## Case: "I want to reorder the commits in this branch"

### Scenario

### Command

- `git rebase -i`; swap lines

### Real-life Examples

- I want my PR to tell a story
- I want my PR to be a useful guide for someone doing something similar in the future
- note that even if you go from 7-6-8 to 6-7-8, and both end up with the code being the same at 8, you'll end up with a new commit for 8!

---

Trail: Replaying changes With modifications

## Case: "I want to remove a commit from this branch"

### Scenario

### Command

- `git rebase -i`; `drop`/`d`

### Real-life Examples

- I made a quick fix and committed it in my branch but someone else did it better in another branch
- I was messing around and made a commit that I just don't want anymore

---

Trail: Replaying changes With modifications

## Case: "I want to update a commit in this branch"

- remember that if it's the latest you can use `git commit --amend` without rebasing

### Scenario

### Command

- `git rebase -i`; `edit`/`e`
- make the changes
- `git commit --amend` (or make a new commit)
- `git rebase --continue`

### Notes

- you can edit multiple commits while rebasing
- if you do multiple, you'll repeat the "make changes, amend, continue" loop until they're all complete

### Real-life Examples

- I want to give credit where credit is due! (pairing; mention pear)
- I accidentally included a comment or debugging statement in a previous commit

---

Trail: Replaying changes With modifications

## Case: "I want to combine some older commits into one"

### Scenario

### Command

- `git rebase -i`;
- `squash`/`s`
  - if I care about preserving the individual commit messages
  - `:wq` to start rebasing
  - edit "squashed" commit message (tells you what's all in this commit)
    - `:wq` to make this commit
- `fixup`/`f`
  - if I don't care about preserving the individual commit messages
  - `:wq` to start rebasing
- need to deal with any conflicts along the way
  - make changes
  - commit them
  - `git rebase --continue`

### Real-life Examples

- I missed part of a previous commit until later
- I want my PR to tell a story
- I want my PR to be a useful guide for someone doing something similar in the future

---
