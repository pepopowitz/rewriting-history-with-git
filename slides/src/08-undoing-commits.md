Layout: module

# Undoing Commits

## I committed things and I want to undo them.

---

Trail: Undoing commits

## !!!Danger zone!!!!

Be cautious when commits have been pushed to others!

- if they have started more work based on that commit, things get real bad!!!
- if they haven't started any work, they will still probably want to delete the branch before re-fetching it.

---

Trail: Updating commits

## Question: is it the most recent commit?

---

Trail: Updating commits,Most recent commit?

## YES

---

Trail: Updating commits,Most recent commit?,YES

## Case: "I want to undo my last commit and save the results"

### Scenario

### Command

- `git reset`
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

Trail: Updating commits,Most recent commit?,YES

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

Trail: Updating commits,Most recent commit?

## NO

---

Trail: Updating commits,Most recent commit?,NO

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

Trail: Updating commits

## Case: "Awwww @#$!#$#@ I committed secrets and I pushed them up"

### Scenario

### Command

- https://sparkbox.com/foundry/remove_file_from_git_history_with_git_filter-branch
- cycle your credentials!!!!

### Real-life Examples

- https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things

---
