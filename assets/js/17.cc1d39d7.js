(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{435:function(e,t,r){"use strict";r.r(t);var a=r(43),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"virtualbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox"}},[e._v("#")]),e._v(" Virtualbox")]),e._v(" "),r("h2",{attrs:{id:"premiere-machine-virtuelle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#premiere-machine-virtuelle"}},[e._v("#")]),e._v(" Première machine virtuelle")]),e._v(" "),r("p",[e._v("La documentation permettant l'installation de virtualbox se situe ici :\n"),r("a",{attrs:{href:"http://doc.ubuntu-fr.org/virtualbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://doc.ubuntu-fr.org/virtualbox"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("La documentation de référence de virtualbox se trouve ici :\n"),r("a",{attrs:{href:"http://www.virtualbox.org/wiki/End-user_documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.virtualbox.org/wiki/End-user_documentation"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Travail préliminaire :")])]),e._v(" "),r("ul",[r("li",[e._v("Télécharger d'abord l'image iso ubuntu sur "),r("a",{attrs:{href:"https://ubuntu.daupheus.com/20.04.2.0/ubuntu-20.04.2.0-desktop-amd64.iso",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ubuntu.daupheus.com/20.04.2.0/ubuntu-20.04.2.0-desktop-amd64.iso"),r("OutboundLink")],1),e._v(". Si vous êtes à l'IUT, monter le serveur nas du département dans votre arborescence : "),r("code",[e._v("mount -t nfs rt-nas:/mnt/distvm /srv/nas")]),e._v(". L'image se trouvera donc sur "),r("code",[e._v("/srv/nas/")]),e._v(".")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Installez "),r("strong",[e._v("virtualbox")]),e._v(" ainsi que  "),r("strong",[e._v("le pack d'extension")]),e._v(". Pour plus d'informations consulter la section 3 sur "),r("a",{attrs:{href:"http://doc.ubuntu-fr.org/virtualbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("cette page"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Pour créer une machine virtuelle, il faut spécifier à Virtualbox ses caractéristiques. Lancez Virtualbox et créez une machine virtuelle en utilisant l'interface graphique avec les paramètres suivants :")]),e._v(" "),r("ul",[r("li",[e._v("Nom : Ubuntu1")]),e._v(" "),r("li",[e._v("Type : Ubuntu Linux 64 bits")]),e._v(" "),r("li",[e._v("Stockage : 10G")]),e._v(" "),r("li",[e._v("Pour toutes les autres options, prendre les valeurs par défaut")])])]),e._v(" "),r("li",[r("p",[e._v("A partir de la commande file (faire un man pour interpréter les valeurs) et en inspectant les fichiers textes, indiquez quels fichiers ont été créés sur le disque, quel est leur type (binaire,  ascii) ainsi que leur rôle ? .")])]),e._v(" "),r("li",[r("p",[e._v("Quelle est la taille actuelle du disque virtuel sur le disque ? Cela correspond-il au paramétrage ?\n")])]),e._v(" "),r("li",[r("p",[e._v("Editez les paramètres de votre machine. Dans l'onglet « Stockage »,  ajoutez un disque CD/ROM virtuel pointant sur l'ISO que vous venez de télécharger.  Bootez et faites une installation classique en créant un utilisateur primaire user.")])])]),e._v(" "),r("h2",{attrs:{id:"les-additions-invite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#les-additions-invite"}},[e._v("#")]),e._v(" Les Additions invité")]),e._v(" "),r("p",[e._v("Les Additions invité sont des pilotes adaptés pour les systèmes invités comme Windows ou ceux basés sur GNU/Linux qui permettent :")]),e._v(" "),r("ul",[r("li",[e._v("Un affichage graphique plus rapide (avec gestion de l'accélération 2D et 3D) et automatiquement adapté à la résolution graphique du système hôte,")]),e._v(" "),r("li",[e._v("Le partage du presse-papier,")]),e._v(" "),r("li",[e._v("Le partage des dossiers,")]),e._v(" "),r("li",[e._v("Une capture/libération dynamique du curseur lorsque celui-ci se déplace entre système hôte et système invité.")])]),e._v(" "),r("p",[e._v("Pour activer les Additions invité, lancez Virtualbox, puis le Système invité. Ensuite dans le menu "),r("strong",[e._v("Périphériques")]),e._v(", cliquez sur "),r("strong",[e._v("Insérer l'image CD des Additions invité…")]),e._v(". (La suite dépend du système invité.)")]),e._v(" "),r("p",[e._v("Sur la machine invitée, installez les paquets nécésaires :")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("sudo apt-get install build-essential  linux-headers-$(uname -r)\n")])])]),r("p",[e._v("A partir du répertoire du cd monté executez la commande d'installation :")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("sudo ./VBoxLinuxAdditions.run \n")])])]),r("h2",{attrs:{id:"reseau"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reseau"}},[e._v("#")]),e._v(" Réseau")]),e._v(" "),r("p",[e._v("Virtualbox permet de partager des répertoires entre la machine hôte et\nla machine invité.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Créez un répertoire partagé à l'aide de l'interface graphique de Virtualbox pour votre machine Ubuntu1. Cochez la cache permanent mais PAS automatique car on veut ajuster les droits d'accès au répertoire.")])]),e._v(" "),r("li",[r("p",[e._v("Montez le répertoire comme une partition externe de type vboxsf dans   le répertoire Shared de l'utilisateur de base 'user'. Est-ce que\nuser peut écrire dans ce répertoire. Pourquoi ?")])]),e._v(" "),r("li",[r("p",[e._v("On veut que le montage soit automatique au démarrage. Pour cela,   modifiez /etc/fstab avec comme nom du volume, le nom donné dans l'interface Virtualbox, comme type vboxfs et comme options uid= et gid= mis aux bonnes valeurs pour l'utilisateur user (probablement 1000).")])]),e._v(" "),r("li",[r("p",[e._v("Etudions maintenant le type d'interconnexion réseau de la machine. Nous allons maintenant comparer les performances réseaux des modes "),r("strong",[e._v("NAT")]),e._v(" et "),r("strong",[e._v("pont (bridge)")]),e._v(".")])])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Si vous êtes à l'IUT :")]),e._v(" "),r("ul",[r("li",[e._v("Configurez apt-get pour passer par le proxy en créant le fichier "),r("code",[e._v("/etc/apt/apt.conf.d/proxy")]),e._v(" :")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('Acquire::http::Proxy "http://cache-etu.univ-artois.fr:3128/"; \n')])])])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Pour faire les tests de performance, on va utiliser deux machines (une avec une connexion de type NAT et une autre en pont. Créez une nouvelle machine Ubuntu2 en faisant un  clone de la première. Mais "),r("strong",[e._v("avant")]),e._v(" installez avec apt l'outil iperf dont le manuel d'utilisation est ici "),r("a",{attrs:{href:"http://openmaniak.com/iperf.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://openmaniak.com/iperf.php"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("En utilisant le même serveur choisi sur "),r("a",{attrs:{href:"https://iperf.fr/iperf-servers.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://iperf.fr/iperf-servers.php"),r("OutboundLink")],1),e._v(", "),r("code",[e._v("ping.online.net")]),e._v(" par exemple. Quel est le débit obtenu en mode NAT et en mode bridge ? Quelle configuration d'iperf avez-vous utilisez ? Apporter ces résultats sur "),r("a",{attrs:{href:"https://moodle.univ-artois.fr/cours/mod/questionnaire/view.php?id=107504",target:"_blank",rel:"noopener noreferrer"}},[e._v("moodle"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[e._v("Si vous êtes à l'IUT")]),e._v(" "),r("p",[e._v("L'interface crée en NAT doit avoir une adresse MAC reconnue par le serveur DHCP.")]),e._v(" "),r("p",[e._v("Il faut mettre donc : "),r("code",[e._v("08:00:27:00:03:XX")]),e._v(" (XX est votre numéro)")])]),e._v(" "),r("h2",{attrs:{id:"performances-cpu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#performances-cpu"}},[e._v("#")]),e._v(" Performances CPU")]),e._v(" "),r("p",[e._v("Nous allons faire tourner un benchmark en lui faisant tester la vitesse d'excécution d'un programme de calcul de nombre premiers avec un nombre de threads variables (on le fait varier si on a plusieurs cœurs associés à l'OS) afin de comparer les performances dans la machine virtuelle et dans la machine physique.")]),e._v(" "),r("ol",[r("li",[e._v("Installez le benchmark sysbench (par un apt-get install classique)")]),e._v(" "),r("li",[e._v("Faites tourner le benchmark en lui faisant tester la vitesse  d'excécution d'un programme effectuant 10000 calculs dans une seule thread à l'aide de la commande suivante :\\")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('sysbench --test=cpu --cpu-max-prime=10000 --num-threads=1 run | grep "total time:"\n')])])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Si il a N cœurs à sa disposition et N threads, chaque thread fera  10000/N calculs donc le temps total est divisé par N.  Comparez en les commantant les performances dans la machine    virtuelle et dans la machine physique.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);