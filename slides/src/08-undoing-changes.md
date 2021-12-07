Layout: module

# Undoing Changes

## I made changes that **I haven't committed** and I want to undo them.

Notes:

haven't committed -- these are local changes that I have,

in an untracked, unstaged, or staged state

and as you might expect, our strategies here depend on

_which_ of those states your work is in

and where we are on the wheel! of! git!

---

Trail: Undoing changes

## Case: "I want to **unstage** staged changes to a file"

IMAGE: from staged work to unstaged on wheel of git

---

Trail: Undoing changes,Unstage staged changes

LineNumbers: 1|5

### Scenario

```bash
> git status
On branch main
Changes to be committed:
  (use "git restore --staged (file)..." to unstage)
        modified:   3_find_napoleon_at_waterpark.md
```

---

Trail: Undoing changes,Unstage staged changes

LineNumbers: 1|5-6

### Scenario

```diff
> git diff --staged

 - Ted's brother Deacon ditches Napoleon at bowling alley.
 - The boys leave the other figures at the mall.
-- Bill & Ted find Napoleon at a waterpark.
+- Bill & Ted leave Napoleon at a waterpark.
 - Ted's dad arrests the other figures for destroying the mall.
```

---

Trail: Undoing changes,Unstage staged changes

LineNumbers: 1|2,4,7

### Resolution

#### `git restore --staged ./path`

```bash
> git restore --staged .
> git status
On branch main
Changes not staged for commit:
  (use "git add (file)..." to update what will be committed)
  (use "git restore (file)..." to discard changes in working directory)
        modified:   3_find_napoleon_at_waterpark.md

no changes added to commit (use "git add" and/or "git commit -a")
```

---

### Real-life Examples

- decide against committing some work 🤷
<!-- .element: class="fragment" -->
- partial staging: stage all, then unstage unrelated things
<!-- .element: class="fragment" -->

Notes:

(2) sometimes an easier way to partially stage

---

Trail: Undoing changes

## Case: "I want to discard **unstaged** changes to a file"

IMAGE: unstaged work to no changes on wheel of git

---

Trail: Undoing changes,Discard unstaged changes

LineNumbers: 1|3,6|8

### Scenario

```bash
> git status
On branch main
Changes not staged for commit:
  (use "git add (file)..." to update what will be committed)
  (use "git restore (file)..." to discard changes in working directory)
        modified:   3_find_napoleon_at_waterpark.md

no changes added to commit (use "git add" and/or "git commit -a")
```

---

Trail: Undoing changes,Discard unstaged changes

LineNumbers: 1|3-7|11-12

### Scenario

```diff
> git diff

diff --git a/3_find_napoleon_at_waterpark.md b/3_find_napoleon_at_waterpark.md
index 2fe075c..adb9118 100644
--- a/3_find_napoleon_at_waterpark.md
+++ b/3_find_napoleon_at_waterpark.md
@@ -2,5 +2,5 @@

 - Ted's brother Deacon ditches Napoleon at bowling alley.
 - The boys leave the other figures at the mall.
-- Bill & Ted find Napoleon at a waterpark.
+- Bill & Ted leave Napoleon at a waterpark.
 - Ted's dad arrests the other figures for destroying the mall.
```

---

Trail: Undoing changes,Discard unstaged changes

LineNumbers: 1|2-4

### Resolution

#### `git restore ./path`

```bash
> git restore .
> git status
On branch main
nothing to commit, working tree clean
```

---

Trail: Undoing changes,Discard unstaged changes

### Real-life Examples

- accidentally type a character in a file and suddenly your app doesn't work anymore 😅
<!-- .element: class="fragment" -->
- leave a stray console.log 😬
<!-- .element: class="fragment" -->
- hack your app to make a certain flow happen temporarily 🪚
<!-- .element: class="fragment" -->
- decide against a change 🙅‍♀️
<!-- .element: class="fragment" -->

---

Trail: Undoing changes

## Case: "I want to discard **staged** changes to a file"

IMAGE: from staged changes to no changes on wheel

---

Trail: Undoing changes,Discard staged changes

### Resolution

#### `git restore --staged --worktree`

Notes:

- `--worktree` was assumed in our prior example (undo unstaged work)

---

Trail: Undoing changes,Discard staged changes

### Real-life Examples

- decide against committing some work 🤷
<!-- .element: class="fragment" -->

Notes:

maybe you want to switch to another branch & don't care about the work here

---

Trail: Undoing changes

## Case: "I want to discard changes to an **untracked** file"

IMAGE: from untracked file to no changes on wheel of git

---

Trail: Undoing changes,Discard untracked file

### Resolution

#### ` git clean ./path`

---

Trail: Undoing changes,Discard untracked file

### Notes

- probably need either `-i` or `-f` flag
  - `-i` is interactive - it asks you which files to reset
  - `-f` is force - just does all of them.
  - `-d` to include directories
  - if you've changed a git config setting, you might not

---

Trail: Undoing changes,Discard untracked file

### Real-life Examples

- decide against committing some work 🤷
<!-- .element: class="fragment" -->

---

Trail: Undoing changes

## Case: "I just want to discard all files!!!"

###### `git clean -df . && git restore --staged --worktree .`

<!-- .element: class="fragment" -->

###### `git config --global alias.discard "\!git clean -df . && git restore --staged --worktree ."`

<!-- .element: class="fragment" -->

Notes:

combine the previous few slides

and then create an alias for it to save yourself the trouble of typing all that.

---

Trail: Undoing changes

## Case: "I want to discard all changes **but save them for later**"

IMAGE: moving changes to a drawer somewhere labelled "stashes"

---

Trail: Undoing changes,Save changes for later

### Resolution

#### `git stash --include-untracked`

<!-- .element: class="fragment" -->

#### `git stash pop/apply`

<!-- .element: class="fragment" -->

Notes:

saves it to a storage area named "stashes"

...and when you want it back, `git stash pop/apply`

(pop removes it from the stashes queue, apply leaves it in the stashes queue.)

---

Trail: Undoing changes,Save changes for later

### Real-life Examples

- switch branches to look into something 🕵️‍♂️
<!-- .element: class="fragment" -->
- set aside a failed experiment 🧪
<!-- .element: class="fragment" -->

---
