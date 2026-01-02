# Mon Premier Projet React avec React-Bootstrap



Ce tutoriel explique comment créer une application React simple en intégrant Bootstrap via React-Bootstrap. Nous allons construire une interface avec une navbar, un header et des cartes disposées dans une grille responsive.

## Prérequis

- Node.js installé sur votre machine.
- Connaissance de base de React.

## Étapes de mise en place

### 1. Création du projet React

Utilisez `create-react-app` pour initialiser un nouveau projet :

```bash
npx create-react-app my-react-bootstrap-app
cd my-react-bootstrap-app
```

### 2. Installation de React-Bootstrap

Installez React-Bootstrap et Bootstrap :

```bash
npm install react-bootstrap bootstrap
```

### 3. Import du CSS de Bootstrap dans le fichier index.js

Dans `src/index.js`, ajoutez l'import du CSS de Bootstrap :

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 4. Création du composant App.js

Modifiez `src/App.js` pour intégrer les composants Bootstrap.

#### Import des composants Bootstrap nécessaires

```javascript
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';
```

#### Étapes réalisées

- Création d’un fragment React (`<>...</>`).
- Mise en place d’un div principal avec la classe `App`.
- Ajout d’une Navbar avec les liens Home, Features et Contact.
- Ajout d’un Header centré avec le titre "Welcome to React Bootstrap".
- Ajout de trois Cards disposées dans une grille Bootstrap.

#### Exemple de code App.js

Voici le code complet pour `App.js` :

```javascript
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center mb-4">
            Welcome to React Bootstrap
          </h1>

          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>
                    This is the first card using React Bootstrap.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>
                    This is the second card using React Bootstrap.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>
                    This is the third card using React Bootstrap.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
```

### 5. Lancement du projet

Lancez l'application en mode développement :

```bash
npm start
```

Le projet s’ouvrira automatiquement dans votre navigateur par défaut.

## Résultat obtenu

- Une Navbar en haut avec les liens Home, Features et Contact.
- Un Header centré avec le titre "Welcome to React Bootstrap".
- Trois Cards alignées dans une grille responsive (utilisant le système de grille Bootstrap).

## 📚 Points appris

- Création d’un projet React avec `create-react-app`.
- Utilisation des composants React-Bootstrap :
  - Navbar
  - Container
  - Row
  - Col
  - Card
- Structure d’un projet React :
  - `index.js`
  - `App.js`
  - `public/index.html`
- Utilisation des fragments React (`<>...</>`).
- Mise en page avec la Bootstrap Grid pour une interface responsive.

Pour plus d'informations, consultez la [ documentation   officielle de React-Bootstrap](https://react-bootstrap.github.io/).
