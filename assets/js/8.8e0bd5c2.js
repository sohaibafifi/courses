(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{361:function(e,t,a){"use strict";a.r(t);var r=a(43),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Docker fait partie des dépôts officiels à partir d’Ubuntu. Il suffit donc d'installer le paquet "),a("strong",[a("code",[e._v("docker.io")])]),e._v(". Puis démarrez le service avec : "),a("code",[e._v("systemctl start docker")]),e._v(".")]),e._v(" "),a("p",[e._v("Docker cherche les images en local dans un premier temps. Si l'image n'existe pas il va alors tenter de télécharger la dernière version à partir du docker store (le hub). Puisque l’IUT utilise un proxy, il faut l’indiquer à Docker. Pour cela, il faut créer le répertoire suivant :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mkdir /etc/systemd/system/docker.service.d\n")])])]),a("p",[e._v("puis ajoutez le fichier "),a("code",[e._v("http-proxy.conf")]),e._v(" dans ce répertoire et écrire dedans :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('[Service]\nEnvironment="HTTP_PROXY=http://cache-etu.univ-artois.fr:3128/"\n')])])]),a("p",[e._v("Il faut ensuite redémarrer docker :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("systemctl daemon-reload\nsystemctl restart docker\n")])])]),a("h2",{attrs:{id:"utilisation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utilisation"}},[e._v("#")]),e._v(" Utilisation")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Démarrons notre premier containers "),a("code",[e._v("docker run rtbethune/debian df -Th")]),e._v("\nQue se passe-t-il ?")])]),e._v(" "),a("li",[a("p",[e._v("Un container ne reste en vie que si un processus est actif. On peut lister les containers actifs avec la commande "),a("code",[e._v("docker ps")]),e._v(". On peut aussi lister tous les containers, actifs ou\ninactifs avec "),a("code",[e._v("docker ps -a")]),e._v(". Que vous retourne ces commandes et pourquoi ?")])]),e._v(" "),a("li",[a("p",[e._v("Nous allons maintenant rediriger l’entrée standard du container avec l’option "),a("code",[e._v("-i")]),e._v(" et ouvrir un pseudo-terminal avec "),a("code",[e._v("-t")]),e._v(", le tout en exécutant le processus "),a("code",[e._v("bash")]),e._v(" :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker run -ti --name=debian rtbethune/debian bash\n")])])]),a("p",[e._v("Quelle est la version de debian du container (tapez "),a("code",[e._v("cat /etc/os-release")]),e._v(") et la version du noyou Linux  (tapez "),a("code",[e._v("uname -a")]),e._v(")?")])]),e._v(" "),a("li",[a("p",[e._v("Quelle est l'adresse ip du container ? Communiquer avec le système  hôte avec un "),a("code",[e._v("ping")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Créez un ficher avec "),a("code",[e._v("touch test")]),e._v(" ou faites n'importe  quelle modification sur le container.")])]),e._v(" "),a("li",[a("p",[e._v("Ouvrez un second terminal. Listez les containers actifs ? Combien y  en a-t-il ? Notez leurs "),a("strong",[e._v("ID")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Lorsque l'on fait des modification dans un container, on peut comparer à l'image d'origine avec : "),a("code",[e._v("docker diff ID")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);