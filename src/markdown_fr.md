## 1. Titres

Les titres sont utilisés pour structurer votre document et sont créés en utilisant un ou plusieurs symboles dièse (#) suivis d'un espace. Le niveau du titre est déterminé par le nombre de dièses utilisés, allant de 1 à 6 pour les titres de niveau 1 à 6.

Exemple :

```markdown
# Titre de niveau 1

## Titre de niveau 2

### Titre de niveau 3
```

## 2. Texte en ligne

### 2.1. Italique

Pour mettre du texte en italique, entourez le texte avec des astérisques (\*) ou des tirets bas (\_).

Exemple :

```markdown
_Texte en italique_
_Texte en italique_
```

### 2.2. Gras

Pour mettre du texte en gras, entourez le texte avec des doubles astérisques (\*\*) ou des doubles tirets bas (\_\_).

Exemple :

```markdown
**Texte en gras**
**Texte en gras**
```

### 2.3. Italique et gras combinés

Pour combiner l'italique et le gras, utilisez des triples astérisques (\*\*\*) ou des triples tirets bas (\_\_\_).

Exemple :

```markdown
**_Texte en italique et gras_**
**_Texte en italique et gras_**
```

### 2.4. Texte barré

Pour barrer du texte, entourez le texte avec des tildes (~~).

Exemple :

```markdown
~~Texte barré~~
```

## 3. Listes

### 3.1. Listes à puces

Utilisez un astérisque (\*), un signe plus (+), ou un tiret (-) suivi d'un espace pour créer des listes à puces.

Exemple :

```markdown
- Premier élément
- Deuxième élément
- Troisième élément
```

### 3.2. Listes numérotées

Utilisez des chiffres suivis d'un point et d'un espace pour créer des listes numérotées.

Exemple :

```markdown
1. Premier élément
2. Deuxième élément
3. Troisième élément
```

### 3.3. Listes imbriquées

Pour créer des listes imbriquées, ajoutez quatre espaces (ou une tabulation) avant l'élément de liste.

Exemple :

```markdown
- Premier élément de la liste principale
  - Premier élément de la liste imbriquée
  - Deuxième élément de la liste imbriquée
- Deuxième élément de la liste principale
```

## 4. Liens

### 4.1. Liens en ligne

Utilisez la syntaxe `[texte du lien](URL)` pour créer un lien en ligne.

Exemple :

```markdown
[Cliquez ici pour visiter Google](https://www.google.com)
```

### 4.2. Liens référencés

Les liens référencés vous permettent de définir le lien à un endroit du document et de le référencer ailleurs.

Exemple :

```markdown
[Visitez mon site web][site]
...
[site]: <https://www.example.com>
```

## 5. Images

Insérez des images en utilisant la syntaxe `![texte alternatif](URL de l'image)`.

Exemple :

```markdown
![Logo Markdown](https://example.com/logo.png)
```

## 6. Blocs de code

Utilisez des triples backticks (\```) pour insérer des blocs de code, et spécifiez le langage en option pour une coloration syntaxique appropriée.

Exemple :

````markdown
```python
print("Hello, world!")
```
````

## 7. Citations

Pour citer du texte, utilisez le symbole de chevron (>).

Exemple :

```markdown
> Ceci est une citation.
```

## 8. Lignes horizontales

Insérez une ligne horizontale en utilisant trois astérisques (\*\*\*), des tirets (---), ou des traits de soulignement (\_\_\_) sur une ligne.

Exemple :

```markdown
---
```

## 9. Échapper des caractères

Pour afficher des caractères spéciaux qui ont une signification dans le Markdown, vous pouvez les échapper en les précédant d'un antislash (\\).

Exemple :

```markdown
\\- Pour afficher un tiret sans créer une liste à puces.
```

## 10. Extensions de Markdown

Markdown prend en charge différentes extensions selon les plateformes. Certaines de ces extensions incluent des tables, des tâches à cocher, des entêtes de tableaux, etc.

Exemple de table :

```markdown
| Nom     | Âge |
| ------- | --- |
| Alice   | 25  |
| Bob     | 30  |
| Charlie | 22  |
```

Exemple de tâche à cocher :

```markdown
- [x] Tâche terminée
- [ ] Tâche non terminée
```
