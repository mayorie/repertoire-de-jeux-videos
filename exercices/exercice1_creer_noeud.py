"""Exercice 1 : Création d'un nœud

Fonction demandée :
    creer_noeud(valeur)
qui retourne : (valeur, None, None)
"""

def creer_noeud(valeur):
    """Retourne un tuple représentant un nœud : (valeur, gauche, droite).

    Args:
        valeur: Valeur à stocker dans le nœud.

    Returns:
        tuple: `(valeur, None, None)`
    """
    return (valeur, None, None)


if __name__ == "__main__":
    # Exemple d'utilisation et test simple
    n = creer_noeud(42)
    print("Nœud créé :", n)
    assert n == (42, None, None), "creer_noeud ne retourne pas le tuple attendu"
    print("Assertion passée — la fonction fonctionne comme attendu.")
