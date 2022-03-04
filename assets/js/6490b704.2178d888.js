"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[442],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,k=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),o=n(7294),a=n(2389),i=n(9443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),c=n(6010),d="tabItem_vU9c";function p(e){var t,n,a,i=e.lazy,p=e.block,s=e.defaultValue,m=e.values,k=e.groupId,f=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),T=y.tabGroupChoices,w=y.setTabGroupChoices,x=(0,o.useState)(g),N=x[0],C=x[1],I=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=T[k];null!=O&&O!==N&&h.some((function(e){return e.value===O}))&&C(O)}var E=function(e){var t=e.currentTarget,n=I.indexOf(t),r=h[n].value;r!==N&&(Z(t),C(r),null!=k&&w(k,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;n=I[o]||I[I.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:E,onClick:E},a,{className:(0,c.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function s(e){var t=(0,a.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(6396),l=n(8215),u=["components"],c={title:"Working with Containers"},d=void 0,p={unversionedId:"how-to-guides/working-with-containers",id:"how-to-guides/working-with-containers",title:"Working with Containers",description:"nerdctl is a Docker-compatible CLI for containerd. The primary goal of nerdctl is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.",source:"@site/docs/how-to-guides/working-with-containers.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/working-with-containers",permalink:"/how-to-guides/working-with-containers",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/working-with-containers.md",tags:[],version:"current",frontMatter:{title:"Working with Containers"},sidebar:"tutorialSidebar",previous:{title:"Working with Images",permalink:"/how-to-guides/working-with-images"},next:{title:"Architecture",permalink:"/references/architecture"}},s=[{value:"Running Containers",id:"running-containers",children:[],level:2},{value:"Docker Compose",id:"docker-compose",children:[],level:2},{value:"Exposing a Port",id:"exposing-a-port",children:[],level:2},{value:"Targeting a Kubernetes Namespace",id:"targeting-a-kubernetes-namespace",children:[],level:2}],m={toc:s};function k(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," is a Docker-compatible CLI for containerd. The primary goal of ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/moby/moby"},"Moby")," is an open-source project that was created by Docker to enable and accelerate software containerization. Components include container build tools, a container registry, orchestration tools, and a runtime, and more. The Docker CLI uses the Moby runtime. "),(0,a.kt)("h2",{id:"running-containers"},"Running Containers"),(0,a.kt)("p",null,"To run a container with the default ",(0,a.kt)("inlineCode",{parentName:"p"},"bridge")," CNI network (10.4.0.0/24):"),(0,a.kt)(i.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl run -it --rm alpine\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it --rm alpine\n")))),(0,a.kt)("p",null,"To build an image using BuildKit:"),(0,a.kt)(i.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build -t foo /some-dockerfile-directory\nnerdctl run -it --rm foo\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t foo /some-dockerfile-directory\ndocker run -it --rm foo\n")))),(0,a.kt)("p",null,"To build and send output to a local directory using BuiltKit:"),(0,a.kt)(i.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build -o type=local,dest=. /some-dockerfile-directory\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -o type=local,dest=. /some-dockerfile-directory\n")))),(0,a.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,a.kt)("p",null,"Docker Compose is a tool for defining and running multi-container Docker applications. "),(0,a.kt)(i.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl-compose")," CLI is designed to be compatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl compose up -d\nnerdctl compose down\n"))),(0,a.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," command in the Docker CLI supports most of the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," commands and flags. It is expected to be a drop-in replacement for ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose up -d\ndocker compose down\n")))),(0,a.kt)("h2",{id:"exposing-a-port"},"Exposing a Port"),(0,a.kt)("p",null,"To expose port 8000 for a container:"),(0,a.kt)(i.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl run -d -p 8000:80 nginx\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 8000:80 nginx\n")))),(0,a.kt)("p",null,"You can then access the container via the browser here: ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),"."),(0,a.kt)(i.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build -t demo:latest /code/demos/rd/anvil-app\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t demo:latest /code/demos/rd/anvil-app\n")))),(0,a.kt)("h2",{id:"targeting-a-kubernetes-namespace"},"Targeting a Kubernetes Namespace"),(0,a.kt)("p",null,"You may also target a Kubernetes namespace with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace")," parameter with ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd"),". Please note that ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," doesn't use namespaces."),(0,a.kt)(i.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app\nnerdctl --namespace k8s.io ps\n")))))}k.isMDXComponent=!0}}]);