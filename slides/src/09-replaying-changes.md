Layout: module

# Replaying Changes

## I want to replay this branch onto a different starting point.

todo: is there a better way to say that before they know what replaying is?

---

Trail: Replaying changes

## What do you mean replaying?

### Merging vs rebasing

---

Trail: Replaying changes

## Case: "I want this branch to be based on a different starting point"

### Scenario

### Command

- `git rebase identifier`
- identifier can be a branch name, a SHA, a tag, a relative reference like HEAD~2....

### Real-life Examples

- New changes have been merged to main and I need to rebase my branch on the latest main commit
- I created a branch from the wrong commit/branch and I want to move it

---
