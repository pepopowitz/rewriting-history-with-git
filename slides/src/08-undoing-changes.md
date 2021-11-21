Layout: module

# Undoing Changes

## I made changes that I haven't committed and I want to undo them.

---

Trail: Undoing changes

## It depends

on where we are on the wheel! of! commits!

---

Trail: Undoing changes

## Case: "I want to discard unstaged changes to a file"

### Scenario

### Command

- `git restore`

  - `--worktree` is assumed

### Real-life Examples

---

Trail: Undoing changes

## Case: "I want to unstage staged changes to a file"

- `git restore --staged`

### Scenario

### Command

### Real-life Examples

---

Trail: Undoing changes

## Case: "I want to discard staged changes to a file"

### Scenario

### Command

- `git restore --staged --worktree`

### Real-life Examples

---

Trail: Undoing changes

## Case: "I want to discard changes to an untracked file"

### Scenario

### Command

- ` git clean`
- probably need either `-i` or `-f` flag
  - `-i` is interactive - it asks you which files to reset
  - `-f` is force - just does all of them.
  - `-d` to include directories

### Real-life Examples

---

Trail: Undoing changes

## Case: "I want to discard all changes!"

### Scenario

### Command

- `git clean -df && git restore --worktree --staged .`
- make an alias for it!
- or stash & forget about it :)

---

Trail: Undoing changes

## Case: "I want to discard all changes but save it for later"

### Scenario

### Command

- `git stash`

...and when you want it back, `git stash pop/apply`
(pop removes it from the stashes queue, apply leaves it in the stashes queue.)

### Real-life Examples

---
