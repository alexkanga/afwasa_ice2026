# 🚀 Déploiement Rapide sur Vercel

## ⚠️ IMPORTANT : Si vous avez une erreur 404

Si vous voyez `404: NOT_FOUND` sur Vercel, **le projet doit être recréé** :

1. **Allez sur** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Supprimez votre projet** : Settings → General → Delete Project
3. **Réimportez votre dépôt** : Add New → Project → Import
4. **Laissez Vercel détecter** Next.js automatiquement (ne modifiez PAS les settings)
5. **Cliquez sur Deploy**
6. **Attendez** que le build soit "Ready" (vert)
7. **Testez** l'URL générée

---

## Méthode 1 : Interface Vercel (Plus Simple)

### 1. Préparer le code
```bash
git add .
git commit -m "Prêt pour Vercel"
git push origin main
```

### 2. Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez "Add New..." → "Project"
3. Importez votre dépôt GitHub/GitLab/Bitbucket
4. Laissez Vercel détecter Next.js automatiquement
5. Cliquez "Deploy"

### 3. Vérifier le déploiement
- L'état du projet doit être **Ready** (vert)
- L'URL sera formatée : `https://your-project-name.vercel.app`

---

## Méthode 2 : Vercel CLI

### 1. Installer Vercel CLI
```bash
npm install -g vercel
```

### 2. Connecter et déployer
```bash
vercel login
vercel
vercel --prod
```

---

## ✅ Ce qui est déjà configuré

- ✅ `vercel.json` créé et optimisé
- ✅ `next.config.ts` adapté pour Vercel
- ✅ Pas de variables d'environnement requises
- ✅ API KoboToolbox prête
- ✅ Structure de projet correcte

---

## 🧪 Tests Avant Déploiement

```bash
# 1. Nettoyer
rm -rf .next node_modules

# 2. Réinstaller
npm install

# 3. Tester le build
npm run build

# 4. Tester en local
npm run dev
```

---

## 🌐 Après le déploiement

Votre URL sera : `https://your-project-name.vercel.app`

### Tests à effectuer :

1. **Test principal**
```bash
curl https://your-project-name.vercel.app/
```

2. **Test API**
```bash
curl https://your-project-name.vercel.app/api/kpi
```

Devrait retourner :
```json
{
  "SESSIONS_DISPONIBLES": [1, 2, 3, 5, 6, 8, 10, 12, 14],
  "NOMBRE_REPONSES": 20,
  ...
}
```

---

## 🐛 Résolution de Problèmes

### Erreur 404 NOT_FOUND
- Le déploiement a échoué ou le projet n'existe pas
- **Solution** : Supprimez et réimportez le projet sur Vercel

### Erreur de build
- Vérifiez les logs de build sur Vercel
- Vérifiez que `npm run build` fonctionne localement

### API ne fonctionne pas
- Vérifiez que l'API KoboToolbox est accessible
- Vérifiez les logs d'erreurs dans les Vercel Functions

---

## 📚 Documentation Complète

Pour plus de détails, voir :
- `DEPLOYMENT_GUIDE.md` - Guide complet
- `VERCEL_404_TROUBLESHOOTING.md` - Guide de dépannage 404
