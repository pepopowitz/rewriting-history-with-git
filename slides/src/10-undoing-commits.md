Layout: module

# Undoing Commits

## I've committed horrible things and I want to undo them.

---

Trail: Undoing commits

## Case: "I want to undo a commit without rewriting history"

IMAGE: revert commit without rewriting history

Notes:

so effectively, I want a new commit that does the opposite of an old commit

adds what was removed, and removes what was added

the inverse of a previous commit

---

Trail: Undoing commits,Undo without rewriting history

### Resolution

#### `git revert a1a1a1a1`

IMAGE: log after a revert

Notes:

- this creates another commit with the inverse of those changes
- the original commit remains in the log forever!
- which is nice if you don't want to worry about this being a shared/public branch
- note that changes were only added to the end of the log, not rewritten

---

Trail: Undoing commits,Undo without rewriting history

### Real-life Examples

- "Rolling back" a questionable change that got deployed 🤔
<!-- .element: class="fragment" -->

---

Trail: Undoing commits

## Case: "I want to undo my most recent commit(s)"

IMAGE: undoing most recent commit(s)

Notes: this applies to the most recent N commits

---

Trail: Undoing commits,Undo most recent commits ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

Notes:

a revert commit didn't rewrite the log

but now we're going to rewrite the log

---

Trail: Undoing commits,Undo most recent commits ⚠️

### Resolution

#### `git reset a1a1a1a1`

IMAGE: wheel rolling back a few commits

Notes:

- target can be a SHA, or a branch name, or a label...anything git can use to identify a specific commit
- there will be some arguments to this command
- ...
- for starters, you _can_ give it a path if you want to reset specific files
- it will assume you just mean everything
- ...
- but also, we can tell Git what to do with the changes it resets

---

Trail: Undoing commits,Undo most recent commits ⚠️,git reset

### `git reset --soft a1a1a1a1`

IMAGE: results after soft reset

Notes:

- will leave changes that were undone in a **staged** state

- afterward you can do what you want with the changes -- stash them, etc.

---

Trail: Undoing commits,Undo most recent commits ⚠️,git reset

### `git reset --mixed a1a1a1a1`

IMAGE: results after mixed reset

Notes:

will leave changes that were undone in a **changed** state

---

Trail: Undoing commits,Undo most recent commits ⚠️,git reset

### `git reset --hard a1a1a1a1`

IMAGE: results after hard reset

Notes:

will revert changes that were undone!!

---

Trail: Undoing commits,Undo most recent commits ⚠️,git reset

### Real-life Examples

- accidentally committed on a branch you didn't mean to 😅
<!-- .element: class="fragment" -->
- too much in one commit and you want your log to tell a story 📕
<!-- .element: class="fragment" -->
- committed a secret but didn't push it up yet 😬
<!-- .element: class="fragment" -->

Notes:

- 1: you would reset, switch to a new branch, & commit
- 3: note that the commit itself doesn't get cleaned up right away, until git garbage collects it
  - and in order to be removed by gc, it needs to be removed from reflog
    - which by default doesn't happen for 30 days for unreachable commits
    - so if you need to completely wipe this commit from existence, you have to do a little bit more

---

Trail: Undoing commits

## Case: "Awwww 🤬 I committed secrets and I pushed them up HALP"

IMAGE: secrets in the log

Notes:

we can try to rewrite with reset, but here's the problem

---

Trail: Undoing commits,Spoiled secrets ⚠️

IMAGE: reflog showing secrets committed

Notes:

even if we do, and we don't see those secrets, the reflog still has that commit!

the reflog will get cleared out locally through garbage collection

so if you didn't push the commit with the secrets, and you reset, you're fine

but if you pushed up that commit, it's out there

and you need to take a couple drastic steps

---

Trail: Undoing commits,Spoiled secrets ⚠️

## !!!Danger zone!!!!

## IMAGE: DANGER ZONE

---

Trail: Undoing commits,Spoiled secrets ⚠️

### Resolution

#### 1. `git filter-branch`

#### 2. Cycle your credentials

Notes:

- https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things

---
