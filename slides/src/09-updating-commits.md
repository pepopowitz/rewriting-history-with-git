Layout: module

# Updating Commits

## I committed something but I want to change it.

---

Trail: Updating commits

IMAGE: updating a commit means updating the SHA

---

Trail: Updating commits ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

### Be cautious when commits have been pushed to others!

TODO: what can happen when updated commits are pushed?

---

Trail: Updating commits ⚠️

## I've updated a commit! Is it safe to push?

- Only if **coordinated with others** active on this branch

<!-- .element: class="fragment" -->

- **Establish team practices** around pushing updated commits

<!-- .element: class="fragment" -->

Notes:

---

Trail: Updating commits ⚠️,Coordinating with others

### Working alone?

You're clear.

---

Trail: Updating commits ⚠️,Coordinating with others

### Working with a pair?

It's fine.

Have them delete their local copy of the branch & re-pull it.

<!-- .element: class="fragment" -->

---

Trail: Updating commits ⚠️,Coordinating with others

### Working with someone who also made changes?

It can be done.

One of you pushes, the other gets their commits back onto the branch via merging/rebasing/cherry-picking

<!-- .element: class="fragment" -->

TODO: show them how to do this?

---

Trail: Updating commits ⚠️,Coordinating with others

### Working with several people?

**Establish team rules/guidance** & stick to it.

---

Trail: Updating commits ⚠️

## Why would I ever want to update existing commits??

---

Trail: Updating commits ⚠️,Why update?

TODO: build this out

- all commits should be functional (makes git bisect possible)
- more helpful for reviewers
  - commits tell a story
  - show a jon pr vs a pavlos pr
- remove confusing false starts or misleading commit messages

---

Trail: Updating commits ⚠️

## Case: "I want to update my last commit"

IMAGE: updating most recent commit

---

Trail: Updating commits ⚠️,Most recent commit

### Resolution

#### `git commit --amend`

Notes:

- amends the previous commit
- including SHA!
  - That SHA is a fingerprint of the code in its current state, so if that state changed, so did the SHA
- add/stage things before running the command,
  - or add the -a flag

---

Trail: Updating commits ⚠️,Most recent commit

### Real-life Examples

- improve a commit message 💪🏼
<!-- .element: class="fragment" -->
- add/update changes ➕
<!-- .element: class="fragment" -->
- remove a comment/debugging statement 🐛
<!-- .element: class="fragment" -->
- add a collaborator! 👥
<!-- .element: class="fragment" -->

---

Trail: Updating commits ⚠️,Most recent commit,Giving credit

TODO: show trailer

IMAGE: github to show collaborators

Notes:

- we should give credit to collaborators!

---

Trail: Updating commits ⚠️,Most recent commit,Giving credit

### [github.com/jonallured/pear](https://github.com/jonallured/pear)

```
TODO: show some pear commands
```

---

Trail: Updating commits ⚠️

## Case: "I want to update an older commit"

IMAGE: please hold for this to come later

---
