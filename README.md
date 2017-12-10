1. npm install -g brunch
2. npm install im Root-Verzeichnis ausführen
3. brunch watch --server im Root-Verzeichnis ausführen
4. http://localhost:3333/
5. profit

Alles im 'js'-Ordner wird automatisch kompiliert.
Dateien im 'assets'-Ordner werden nicht bearbeitet und eignen sich daher für statische Dateien (hier liegt auch das index.html).
Falls man die Seite mal ohne Server lokal aufrufen will, dann einfach brunch build --production ausführen; alle Files liegen dann in einem Ordner names 'public'.
