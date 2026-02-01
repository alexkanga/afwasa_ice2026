# 🚀 Guide de Déploiement sur Vercel

## 📋 Vue d'ensemble

Ce guide explique comment déployer le dashboard ICE 2026 sur Vercel.

## 🏗️ Architecture du Projet

- **Framework**: Next.js 16 avec App Router
- **Langage**: TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **API**: KoboToolbox (pas besoin de backend personnalisé)
- **Base de données**: Prisma (non utilisée par le dashboard actuel)

## 🎯 Méthode Recommandée : Déploiement via Interface Vercel

### Étape 1 : Préparation du Dépôt

```bash
# 1. Vérifier que tous les changements sont commités
git status
git add .
git commit -m "Prêt pour déploiement Vercel"

# 2. Pushez vers votre dépôt distant (GitHub/GitLab/Bitbucket)
git push origin main
# ou
git push origin master
```

### Étape 2 : Création du Projet sur Vercel

1. **Connectez-vous** à [vercel.com](https://vercel.com)

2. **Créez un nouveau projet** :
   - Cliquez sur "Add New..." → "Project"
   - Sélectionnez votre dépôt
   - Cliquez sur "Import"

3. **Configurez le projet** :

   **Framework Preset**:
   - Framework: Next.js
   - Automatically détecté par Vercel ✓

   **Build & Development Settings**:
   ```
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

   **Environment Variables**:
   - Aucune variable d'environnement requise pour le moment
   - L'API KoboToolbox est configurée directement dans le code

4. **Cliquez sur "Deploy"**

### Étape 3 : Vérification du Déploiement

Vercel va automatiquement :
1. Installer les dépendances (`npm install`)
2. Builder l'application (`npm run build`)
3. Déployer sur son Edge Network

Le déploiement prend généralement **2-5 minutes**.

## 🔧 Méthode Alternative : Vercel CLI

### Installation

```bash
# Installer Vercel CLI globalement
npm install -g vercel

# Ou utiliser npx (pas besoin d'installation)
npx vercel
```

### Déploiement en Production

```bash
# 1. Se connecter à Vercel
vercel login

# 2. Déploiement de prévisualisation
vercel

# 3. Déploiement en production
vercel --prod

# 4. Voir les déploiements existants
vercel ls
```

## ⚙️ Configuration de Production

### Fichier vercel.json (déjà créé)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ]
}
```

### Configuration next.config.ts (déjà adaptée)

Le fichier détecte automatiquement si l'environnement est Vercel et adapte la configuration :

```typescript
const isVercel = process.env.VERCEL === "1";
```

## 🌐 Après le Déploiement

### 1. Domaine Personnalisé (Optionnel)

1. Allez dans les **Settings** de votre projet Vercel
2. Cliquez sur **Domains**
3. Ajoutez votre domaine personnalisé
4. Configurez les DNS selon les instructions de Vercel

### 2. Configuration des Variables d'Environnement (si nécessaire)

Si vous avez besoin d'ajouter des variables d'environnement :

1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez vos variables
3. Sélectionnez les environnements (Development, Preview, Production)
4. Redéployez

### 3. Monitoring et Logs

Vercel fournit :
- **Real-time Logs**: Logs en temps réel de votre application
- **Analytics**: Analyse de performance et d'utilisation
- **Speed Insights**: Performance de chargement

## 🔄 CI/CD Automatique

Vercel fournit un CI/CD automatique :

- **Preview Deployments**: Un déploiement est créé pour chaque Pull Request
- **Production Deployments**: Déploiement automatique sur la branche principale (main/master)
- **Rollback**: Possibilité de revenir à un déploiement précédent

## 📊 Optimisations pour Vercel

### Image Optimization

Vercel optimise automatiquement les images :
- Compression WebP/AVIF
- Responsive images
- Lazy loading

### Edge Network

Vercel utilise son réseau mondial :
- CDN global
- Cache automatique des assets statiques
- Serverless Functions pour l'API

## 🧪 Tests Avant Déploiement

```bash
# 1. Vérifier le build localement
npm run build

# 2. Tester en local
npm run dev

# 3. Vérifier ESLint
npm run lint

# 4. Vérifier que l'API fonctionne
curl http://localhost:3000/api/kpi
```

## 🐛 Dépannage

### Erreur: Build Failed

Vérifiez :
1. Les logs de build sur Vercel
2. Que toutes les dépendances sont dans package.json
3. Que TypeScript ne génère pas d'erreurs bloquantes

### Erreur: API Not Working

Vérifiez :
1. Que l'API KoboToolbox est accessible
2. Que les CORS sont configurés correctement
3. Les logs d'erreurs dans les Vercel Functions

### Erreur: Images Not Loading

Vérifiez :
1. Que les images sont dans le dossier `public/`
2. Que les chemins sont corrects (commencent par `/`)

## 📚 Ressources Utiles

- [Documentation Vercel](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)

## ✅ Checklist de Déploiement

- [ ] Code pushé sur GitHub/GitLab/Bitbucket
- [ ] Compte Vercel créé
- [ ] Projet importé sur Vercel
- [ ] Build réussi
- [ ] Application accessible via l'URL Vercel
- [ ] API KoboToolbox fonctionne
- [ ] Dashboard affiche toutes les sessions
- [ ] Filtres fonctionnent
- [ ] Graphiques s'affichent correctement
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Monitoring activé (optionnel)

## 🎉 Conclusion

Votre application est maintenant déployée sur Vercel avec :
- ✅ Déploiement automatique
- ✅ CDN mondial
- ✅ HTTPS automatique
- ✅ Preview Deployments
- ✅ Rollback facile
- ✅ Monitoring intégré

**L'URL de production sera formatée comme :** `https://your-project-name.vercel.app`
