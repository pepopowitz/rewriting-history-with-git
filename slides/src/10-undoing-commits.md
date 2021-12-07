Layout: module

# Undoing Commits

## I've committed horrible things and I want to undo them.

---

Trail: Undoing commits ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

---

Trail: Undoing commits ⚠️

## Question: is it the most recent commit?

---

Trail: Undoing commits ⚠️,Most recent commit?

## YES

---

Trail: Undoing commits ⚠️,Most recent commit?,YES

## Case: "I want to undo my last commit(s)"

IMAGE: undoing most recent commit

Notes: this applies to the most recent N commits

---

Trail: Undoing commits ⚠️,Most recent commit?,YES

### Resolution

#### `git reset ...`

Notes:

and there will be some arguments to this command

- for starters, you _can_ give it a path if you want to reset specific files
- it will assume you just mean everything

- but also, we can tell Git what to do with the changes it resets

---

sjhsjhsjh here - break this stuff up (and swallow the --hard stuff from the future into here)

Trail: Undoing commits ⚠️,Most recent commit?,YES,git reset

### `git reset --soft`

- `--soft` or `--mixed` flags depend on what state you want the changes in (soft: staged or mixed: unstaged)

```
--mixed               reset HEAD and index
--soft                reset only HEAD
--hard                reset HEAD, index and working tree
```

- afterward you can do what you want with the changes -- stash them, etc.

### Real-life Examples

- you accidentally commit on a branch you didn't mean to
  - reset, switch to a new branch, & commit

---

Trail: Undoing commits ⚠️,Most recent commit?,YES

## Case: "I want to undo my last commit and never see it again"

### Scenario

### Command

- `git reset --hard HEAD~1`
  - details of what `HEAD~1` MEANS

### Real-life Examples

- I committed a secret **but didn't push it up yet**
  - note that the commit itself doesn't get cleaned up right away, until git garbage collects it
    - and in order to be removed by gc, it needs to be removed from reflog
      - which by default doesn't happen for 30 days for unreachable commits
      - so if you need to completely wipe this commit from existence, you have to do a little bit more

---

Trail: Undoing commits ⚠️,Most recent commit?

## NO

---

Trail: Undoing commits ⚠️,Most recent commit?,NO

## Case: "I want to revert a commit without rewriting history"

### Scenario

### Command

- `git revert SHA`
- this creates another commit with the inverse of those changes
- the original commit remains in the log forever!
  - which is nice if you don't want to worry about this being a shared/public branch

### Real-life Examples

- rolling back a change that got deployed, without having to "roll back".

---

Trail: Undoing commits ⚠️

## Case: "Awwww @#$!#$#@ I committed secrets and I pushed them up"

### Scenario

### Command

- remember the reflog? It tracks everything! So creds are hard to get rid of.
- https://sparkbox.com/foundry/remove_file_from_git_history_with_git_filter-branch
- cycle your credentials!!!!

### Real-life Examples

- https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things

---
