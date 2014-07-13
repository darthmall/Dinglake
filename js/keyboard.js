




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>KeyboardJS/keyboard.js at master · RobertWHurst/KeyboardJS · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="RobertWHurst/KeyboardJS" name="twitter:title" /><meta content="KeyboardJS - A JavaScript library for binding keyboard combos without the pain of key codes and key combo conflicts." name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/178857?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/178857?s=400" property="og:image" /><meta content="RobertWHurst/KeyboardJS" property="og:title" /><meta content="https://github.com/RobertWHurst/KeyboardJS" property="og:url" /><meta content="KeyboardJS - A JavaScript library for binding keyboard combos without the pain of key codes and key combo conflicts." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="62A440F8:1EFF:2AB932C:5385FC86" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="DVVbustSrYvvpX8Z75XHec09nPwzeJQ528UG2x+kcmTPcoWIfYsIOTIpLADoL3SrkooS6jesED9wz6ctsAimRw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-1121bb0260c396426f82723a30b276d949f537a3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-712fa8c0954e275d6626ee28d9660e79c77e47c6.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="3f16474b6e3a1ed04126225242cc563e">

      
  <meta name="description" content="KeyboardJS - A JavaScript library for binding keyboard combos without the pain of key codes and key combo conflicts." />

  <meta content="178857" name="octolytics-dimension-user_id" /><meta content="RobertWHurst" name="octolytics-dimension-user_login" /><meta content="2869424" name="octolytics-dimension-repository_id" /><meta content="RobertWHurst/KeyboardJS" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2869424" name="octolytics-dimension-repository_network_root_id" /><meta content="RobertWHurst/KeyboardJS" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/RobertWHurst/KeyboardJS/commits/master.atom" rel="alternate" title="Recent Commits to KeyboardJS:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2FRobertWHurst%2FKeyboardJS%2Fblob%2Fmaster%2Fkeyboard.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="RobertWHurst/KeyboardJS"
      data-branch="master"
      data-sha="99e0f0e78daf12b91361ce0212981b8fbb966949"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="RobertWHurst/KeyboardJS" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2FRobertWHurst%2FKeyboardJS"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/RobertWHurst/KeyboardJS/stargazers">
      872
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2FRobertWHurst%2FKeyboardJS"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>Fork
      </a>
      <a href="/RobertWHurst/KeyboardJS/network" class="social-count">
        101
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/RobertWHurst" class="url fn" itemprop="url" rel="author"><span itemprop="title">RobertWHurst</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/RobertWHurst/KeyboardJS" class="js-current-repository js-repo-home-link">KeyboardJS</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/RobertWHurst/KeyboardJS" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /RobertWHurst/KeyboardJS">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/RobertWHurst/KeyboardJS/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /RobertWHurst/KeyboardJS/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>12</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/RobertWHurst/KeyboardJS/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /RobertWHurst/KeyboardJS/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/RobertWHurst/KeyboardJS/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /RobertWHurst/KeyboardJS/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/RobertWHurst/KeyboardJS/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /RobertWHurst/KeyboardJS/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/RobertWHurst/KeyboardJS/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /RobertWHurst/KeyboardJS/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/RobertWHurst/KeyboardJS.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/RobertWHurst/KeyboardJS.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/RobertWHurst/KeyboardJS" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/RobertWHurst/KeyboardJS" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/RobertWHurst/KeyboardJS" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save RobertWHurst/KeyboardJS to your computer and use it in GitHub Desktop." aria-label="Save RobertWHurst/KeyboardJS to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/RobertWHurst/KeyboardJS/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download RobertWHurst/KeyboardJS as a zip file"
                   title="Download RobertWHurst/KeyboardJS as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/RobertWHurst/KeyboardJS/blob/db22b7e040aab6b1eead2965a8edc584987f3dca/keyboard.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:74cfeff1a33608277c242282c810ced4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/RobertWHurst/KeyboardJS/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/blob/gh-pages/keyboard.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/blob/master/keyboard.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.4.2/keyboard.js"
                 data-name="v0.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.4.2">v0.4.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.4.0/keyboard.js"
                 data-name="v0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.4.0">v0.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.3.3/keyboard.js"
                 data-name="v0.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.3.3">v0.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.2.2/keyboard.js"
                 data-name="v0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.2">v0.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.2.1/keyboard.js"
                 data-name="v0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.1">v0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.2.0/keyboard.js"
                 data-name="v0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2.0">v0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.1.0/keyboard.js"
                 data-name="v0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.0">v0.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.0.2-AMD/keyboard.js"
                 data-name="v0.0.2-AMD"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.2-AMD">v0.0.2-AMD</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/RobertWHurst/KeyboardJS/tree/v0.0.2/keyboard.js"
                 data-name="v0.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.2">v0.0.2</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/RobertWHurst/KeyboardJS" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">KeyboardJS</span></a></span></span><span class="separator"> / </span><strong class="final-path">keyboard.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="keyboard.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/RobertWHurst/KeyboardJS/contributors/master/keyboard.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>960 lines (856 sloc)</span>
          <span class="meta-divider"></span>
        <span>28.109 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/RobertWHurst/KeyboardJS?branch=master&amp;filepath=keyboard.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/RobertWHurst/KeyboardJS/raw/master/keyboard.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/RobertWHurst/KeyboardJS/blame/master/keyboard.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/RobertWHurst/KeyboardJS/commits/master/keyboard.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Title: KeyboardJS</span></div><div class='line' id='LC3'><span class="cm"> * Version: v0.4.1</span></div><div class='line' id='LC4'><span class="cm"> * Description: KeyboardJS is a flexible and easy to use keyboard binding</span></div><div class='line' id='LC5'><span class="cm"> * library.</span></div><div class='line' id='LC6'><span class="cm"> * Author: Robert Hurst.</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> * Copyright 2011, Robert William Hurst</span></div><div class='line' id='LC9'><span class="cm"> * Licenced under the BSD License.</span></div><div class='line' id='LC10'><span class="cm"> * See https://raw.github.com/RobertWHurst/KeyboardJS/master/license.txt</span></div><div class='line' id='LC11'><span class="cm"> */</span></div><div class='line' id='LC12'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>	<span class="c1">//INDEXOF POLLYFILL</span></div><div class='line' id='LC15'>	<span class="p">[].</span><span class="nx">indexOf</span><span class="o">||</span><span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">indexOf</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="p">(</span><span class="nx">c</span><span class="o">+~~</span><span class="nx">b</span><span class="p">)</span><span class="o">%</span><span class="nx">c</span><span class="p">;</span><span class="nx">b</span><span class="o">&lt;</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">b</span> <span class="k">in</span> <span class="k">this</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">!==</span><span class="nx">a</span><span class="p">);</span><span class="nx">b</span><span class="o">++</span><span class="p">);</span><span class="k">return</span> <span class="nx">b</span><span class="o">^</span><span class="nx">c</span><span class="o">?</span><span class="nx">b</span><span class="o">:-</span><span class="mi">1</span><span class="p">;});</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>	<span class="c1">//AMD</span></div><div class='line' id='LC18'>	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span> <span class="nx">define</span><span class="p">(</span><span class="nx">constructAMD</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>	<span class="c1">//CommonJS</span></div><div class='line' id='LC21'>	<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span><span class="nx">constructCommonJS</span><span class="p">()}</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>	<span class="c1">//GLOBAL</span></div><div class='line' id='LC24'>	<span class="k">else</span> <span class="p">{</span> <span class="nx">constructGlobal</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>	<span class="cm">/**</span></div><div class='line' id='LC27'><span class="cm">	 * Construct AMD version of the library</span></div><div class='line' id='LC28'><span class="cm">	 */</span></div><div class='line' id='LC29'>	<span class="kd">function</span> <span class="nx">constructAMD</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>		<span class="c1">//create a library instance</span></div><div class='line' id='LC32'>		<span class="k">return</span> <span class="nx">init</span><span class="p">();</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>		<span class="c1">//spawns a library instance</span></div><div class='line' id='LC35'>		<span class="kd">function</span> <span class="nx">init</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC36'>			<span class="kd">var</span> <span class="nx">library</span><span class="p">;</span></div><div class='line' id='LC37'>			<span class="nx">library</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;amd&#39;</span><span class="p">);</span></div><div class='line' id='LC38'>			<span class="nx">library</span><span class="p">.</span><span class="nx">fork</span> <span class="o">=</span> <span class="nx">init</span><span class="p">;</span></div><div class='line' id='LC39'>			<span class="k">return</span> <span class="nx">library</span><span class="p">;</span></div><div class='line' id='LC40'>		<span class="p">}</span></div><div class='line' id='LC41'>	<span class="p">}</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>	<span class="cm">/**</span></div><div class='line' id='LC44'><span class="cm">	 * Construct CommonJS version of the library</span></div><div class='line' id='LC45'><span class="cm">	 */</span></div><div class='line' id='LC46'>	<span class="kd">function</span> <span class="nx">constructCommonJS</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>		<span class="c1">//create a library instance</span></div><div class='line' id='LC49'>		<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">init</span><span class="p">();</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>		<span class="c1">//spawns a library instance</span></div><div class='line' id='LC54'>		<span class="kd">function</span> <span class="nx">init</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC55'>			<span class="kd">var</span> <span class="nx">library</span><span class="p">;</span></div><div class='line' id='LC56'>			<span class="nx">library</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;CommonJS&#39;</span><span class="p">);</span></div><div class='line' id='LC57'>			<span class="nx">library</span><span class="p">.</span><span class="nx">fork</span> <span class="o">=</span> <span class="nx">init</span><span class="p">;</span></div><div class='line' id='LC58'>			<span class="k">return</span> <span class="nx">library</span><span class="p">;</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>		<span class="p">}</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>	<span class="p">}</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>	<span class="cm">/**</span></div><div class='line' id='LC65'><span class="cm">	 * Construct a Global version of the library</span></div><div class='line' id='LC66'><span class="cm">	 */</span></div><div class='line' id='LC67'>	<span class="kd">function</span> <span class="nx">constructGlobal</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC68'>		<span class="kd">var</span> <span class="nx">library</span><span class="p">;</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>		<span class="c1">//create a library instance</span></div><div class='line' id='LC71'>		<span class="nx">library</span> <span class="o">=</span> <span class="nx">init</span><span class="p">();</span></div><div class='line' id='LC72'>		<span class="nx">library</span><span class="p">.</span><span class="nx">noConflict</span><span class="p">(</span><span class="s1">&#39;KeyboardJS&#39;</span><span class="p">,</span> <span class="s1">&#39;k&#39;</span><span class="p">);</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>		<span class="c1">//spawns a library instance</span></div><div class='line' id='LC75'>		<span class="kd">function</span> <span class="nx">init</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC76'>			<span class="kd">var</span> <span class="nx">library</span><span class="p">,</span> <span class="nx">namespaces</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">previousValues</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>			<span class="nx">library</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;global&#39;</span><span class="p">);</span></div><div class='line' id='LC79'>			<span class="nx">library</span><span class="p">.</span><span class="nx">fork</span> <span class="o">=</span> <span class="nx">init</span><span class="p">;</span></div><div class='line' id='LC80'>			<span class="nx">library</span><span class="p">.</span><span class="nx">noConflict</span> <span class="o">=</span> <span class="nx">noConflict</span><span class="p">;</span></div><div class='line' id='LC81'>			<span class="k">return</span> <span class="nx">library</span><span class="p">;</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>			<span class="c1">//sets library namespaces</span></div><div class='line' id='LC84'>			<span class="kd">function</span> <span class="nx">noConflict</span><span class="p">(</span>    <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>				<span class="kd">var</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">nI</span><span class="p">,</span> <span class="nx">newNamespaces</span><span class="p">;</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>				<span class="nx">newNamespaces</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>				<span class="k">for</span><span class="p">(</span><span class="nx">nI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">nI</span> <span class="o">&lt;</span> <span class="nx">namespaces</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">nI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'>					<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">previousValues</span><span class="p">[</span><span class="nx">namespaces</span><span class="p">[</span><span class="nx">nI</span><span class="p">]]</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>						<span class="k">delete</span> <span class="nx">context</span><span class="p">[</span><span class="nx">namespaces</span><span class="p">[</span><span class="nx">nI</span><span class="p">]];</span></div><div class='line' id='LC92'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC93'>						<span class="nx">context</span><span class="p">[</span><span class="nx">namespaces</span><span class="p">[</span><span class="nx">nI</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">previousValues</span><span class="p">[</span><span class="nx">namespaces</span><span class="p">[</span><span class="nx">nI</span><span class="p">]];</span></div><div class='line' id='LC94'>					<span class="p">}</span></div><div class='line' id='LC95'>				<span class="p">}</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>				<span class="nx">previousValues</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>				<span class="k">for</span><span class="p">(</span><span class="nx">nI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">nI</span> <span class="o">&lt;</span> <span class="nx">newNamespaces</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">nI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>					<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">newNamespaces</span><span class="p">[</span><span class="nx">nI</span><span class="p">]</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC101'>						<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot replace namespaces. All new namespaces must be strings.&#39;</span><span class="p">);</span></div><div class='line' id='LC102'>					<span class="p">}</span></div><div class='line' id='LC103'>					<span class="nx">previousValues</span><span class="p">[</span><span class="nx">newNamespaces</span><span class="p">[</span><span class="nx">nI</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">context</span><span class="p">[</span><span class="nx">newNamespaces</span><span class="p">[</span><span class="nx">nI</span><span class="p">]];</span></div><div class='line' id='LC104'>					<span class="nx">context</span><span class="p">[</span><span class="nx">newNamespaces</span><span class="p">[</span><span class="nx">nI</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">library</span><span class="p">;</span></div><div class='line' id='LC105'>				<span class="p">}</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>				<span class="nx">namespaces</span> <span class="o">=</span> <span class="nx">newNamespaces</span><span class="p">;</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>				<span class="k">return</span> <span class="nx">namespaces</span><span class="p">;</span></div><div class='line' id='LC110'>			<span class="p">}</span></div><div class='line' id='LC111'>		<span class="p">}</span></div><div class='line' id='LC112'>	<span class="p">}</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'><span class="p">})(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">env</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>	<span class="kd">var</span> <span class="nx">KeyboardJS</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">locales</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">locale</span><span class="p">,</span> <span class="nx">map</span><span class="p">,</span> <span class="nx">macros</span><span class="p">,</span> <span class="nx">activeKeys</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">bindings</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">activeBindings</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC116'>	<span class="nx">activeMacros</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">aI</span><span class="p">,</span> <span class="nx">usLocale</span><span class="p">;</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>	<span class="c1">///////////////////////</span></div><div class='line' id='LC120'>	<span class="c1">// DEFUALT US LOCALE //</span></div><div class='line' id='LC121'>	<span class="c1">///////////////////////</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>	<span class="c1">//define US locale</span></div><div class='line' id='LC124'>	<span class="c1">//If you create a new locale please submit it as a pull request or post</span></div><div class='line' id='LC125'>	<span class="c1">// it in the issue tracker at</span></div><div class='line' id='LC126'>	<span class="c1">// http://github.com/RobertWhurst/KeyboardJS/issues/</span></div><div class='line' id='LC127'>	<span class="nx">usLocale</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC128'>		<span class="s2">&quot;map&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>			<span class="c1">//general</span></div><div class='line' id='LC131'>			<span class="s2">&quot;3&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;cancel&quot;</span><span class="p">],</span></div><div class='line' id='LC132'>			<span class="s2">&quot;8&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;backspace&quot;</span><span class="p">],</span></div><div class='line' id='LC133'>			<span class="s2">&quot;9&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;tab&quot;</span><span class="p">],</span></div><div class='line' id='LC134'>			<span class="s2">&quot;12&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;clear&quot;</span><span class="p">],</span></div><div class='line' id='LC135'>			<span class="s2">&quot;13&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;enter&quot;</span><span class="p">],</span></div><div class='line' id='LC136'>			<span class="s2">&quot;16&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;shift&quot;</span><span class="p">],</span></div><div class='line' id='LC137'>			<span class="s2">&quot;17&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;ctrl&quot;</span><span class="p">],</span></div><div class='line' id='LC138'>			<span class="s2">&quot;18&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;alt&quot;</span><span class="p">,</span> <span class="s2">&quot;menu&quot;</span><span class="p">],</span></div><div class='line' id='LC139'>			<span class="s2">&quot;19&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;pause&quot;</span><span class="p">,</span> <span class="s2">&quot;break&quot;</span><span class="p">],</span></div><div class='line' id='LC140'>			<span class="s2">&quot;20&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;capslock&quot;</span><span class="p">],</span></div><div class='line' id='LC141'>			<span class="s2">&quot;27&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;escape&quot;</span><span class="p">,</span> <span class="s2">&quot;esc&quot;</span><span class="p">],</span></div><div class='line' id='LC142'>			<span class="s2">&quot;32&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;space&quot;</span><span class="p">,</span> <span class="s2">&quot;spacebar&quot;</span><span class="p">],</span></div><div class='line' id='LC143'>			<span class="s2">&quot;33&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;pageup&quot;</span><span class="p">],</span></div><div class='line' id='LC144'>			<span class="s2">&quot;34&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;pagedown&quot;</span><span class="p">],</span></div><div class='line' id='LC145'>			<span class="s2">&quot;35&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;end&quot;</span><span class="p">],</span></div><div class='line' id='LC146'>			<span class="s2">&quot;36&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;home&quot;</span><span class="p">],</span></div><div class='line' id='LC147'>			<span class="s2">&quot;37&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;left&quot;</span><span class="p">],</span></div><div class='line' id='LC148'>			<span class="s2">&quot;38&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;up&quot;</span><span class="p">],</span></div><div class='line' id='LC149'>			<span class="s2">&quot;39&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;right&quot;</span><span class="p">],</span></div><div class='line' id='LC150'>			<span class="s2">&quot;40&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;down&quot;</span><span class="p">],</span></div><div class='line' id='LC151'>			<span class="s2">&quot;41&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;select&quot;</span><span class="p">],</span></div><div class='line' id='LC152'>			<span class="s2">&quot;42&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;printscreen&quot;</span><span class="p">],</span></div><div class='line' id='LC153'>			<span class="s2">&quot;43&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;execute&quot;</span><span class="p">],</span></div><div class='line' id='LC154'>			<span class="s2">&quot;44&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;snapshot&quot;</span><span class="p">],</span></div><div class='line' id='LC155'>			<span class="s2">&quot;45&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;insert&quot;</span><span class="p">,</span> <span class="s2">&quot;ins&quot;</span><span class="p">],</span></div><div class='line' id='LC156'>			<span class="s2">&quot;46&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;delete&quot;</span><span class="p">,</span> <span class="s2">&quot;del&quot;</span><span class="p">],</span></div><div class='line' id='LC157'>			<span class="s2">&quot;47&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;help&quot;</span><span class="p">],</span></div><div class='line' id='LC158'>			<span class="s2">&quot;91&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;command&quot;</span><span class="p">,</span> <span class="s2">&quot;windows&quot;</span><span class="p">,</span> <span class="s2">&quot;win&quot;</span><span class="p">,</span> <span class="s2">&quot;super&quot;</span><span class="p">,</span> <span class="s2">&quot;leftcommand&quot;</span><span class="p">,</span> <span class="s2">&quot;leftwindows&quot;</span><span class="p">,</span> <span class="s2">&quot;leftwin&quot;</span><span class="p">,</span> <span class="s2">&quot;leftsuper&quot;</span><span class="p">],</span></div><div class='line' id='LC159'>			<span class="s2">&quot;92&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;command&quot;</span><span class="p">,</span> <span class="s2">&quot;windows&quot;</span><span class="p">,</span> <span class="s2">&quot;win&quot;</span><span class="p">,</span> <span class="s2">&quot;super&quot;</span><span class="p">,</span> <span class="s2">&quot;rightcommand&quot;</span><span class="p">,</span> <span class="s2">&quot;rightwindows&quot;</span><span class="p">,</span> <span class="s2">&quot;rightwin&quot;</span><span class="p">,</span> <span class="s2">&quot;rightsuper&quot;</span><span class="p">],</span></div><div class='line' id='LC160'>			<span class="s2">&quot;145&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;scrolllock&quot;</span><span class="p">,</span> <span class="s2">&quot;scroll&quot;</span><span class="p">],</span></div><div class='line' id='LC161'>			<span class="s2">&quot;186&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;semicolon&quot;</span><span class="p">,</span> <span class="s2">&quot;;&quot;</span><span class="p">],</span></div><div class='line' id='LC162'>			<span class="s2">&quot;187&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;equal&quot;</span><span class="p">,</span> <span class="s2">&quot;equalsign&quot;</span><span class="p">,</span> <span class="s2">&quot;=&quot;</span><span class="p">],</span></div><div class='line' id='LC163'>			<span class="s2">&quot;188&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;comma&quot;</span><span class="p">,</span> <span class="s2">&quot;,&quot;</span><span class="p">],</span></div><div class='line' id='LC164'>			<span class="s2">&quot;189&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;dash&quot;</span><span class="p">,</span> <span class="s2">&quot;-&quot;</span><span class="p">],</span></div><div class='line' id='LC165'>			<span class="s2">&quot;190&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;period&quot;</span><span class="p">,</span> <span class="s2">&quot;.&quot;</span><span class="p">],</span></div><div class='line' id='LC166'>			<span class="s2">&quot;191&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;slash&quot;</span><span class="p">,</span> <span class="s2">&quot;forwardslash&quot;</span><span class="p">,</span> <span class="s2">&quot;/&quot;</span><span class="p">],</span></div><div class='line' id='LC167'>			<span class="s2">&quot;192&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;graveaccent&quot;</span><span class="p">,</span> <span class="s2">&quot;`&quot;</span><span class="p">],</span></div><div class='line' id='LC168'>			<span class="s2">&quot;219&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;openbracket&quot;</span><span class="p">,</span> <span class="s2">&quot;[&quot;</span><span class="p">],</span></div><div class='line' id='LC169'>			<span class="s2">&quot;220&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;backslash&quot;</span><span class="p">,</span> <span class="s2">&quot;\\&quot;</span><span class="p">],</span></div><div class='line' id='LC170'>			<span class="s2">&quot;221&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;closebracket&quot;</span><span class="p">,</span> <span class="s2">&quot;]&quot;</span><span class="p">],</span></div><div class='line' id='LC171'>			<span class="s2">&quot;222&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;apostrophe&quot;</span><span class="p">,</span> <span class="s2">&quot;&#39;&quot;</span><span class="p">],</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>			<span class="c1">//0-9</span></div><div class='line' id='LC174'>			<span class="s2">&quot;48&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;zero&quot;</span><span class="p">,</span> <span class="s2">&quot;0&quot;</span><span class="p">],</span></div><div class='line' id='LC175'>			<span class="s2">&quot;49&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;one&quot;</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="p">],</span></div><div class='line' id='LC176'>			<span class="s2">&quot;50&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;two&quot;</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="p">],</span></div><div class='line' id='LC177'>			<span class="s2">&quot;51&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;three&quot;</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="p">],</span></div><div class='line' id='LC178'>			<span class="s2">&quot;52&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;four&quot;</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="p">],</span></div><div class='line' id='LC179'>			<span class="s2">&quot;53&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;five&quot;</span><span class="p">,</span> <span class="s2">&quot;5&quot;</span><span class="p">],</span></div><div class='line' id='LC180'>			<span class="s2">&quot;54&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;six&quot;</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="p">],</span></div><div class='line' id='LC181'>			<span class="s2">&quot;55&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;seven&quot;</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="p">],</span></div><div class='line' id='LC182'>			<span class="s2">&quot;56&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;eight&quot;</span><span class="p">,</span> <span class="s2">&quot;8&quot;</span><span class="p">],</span></div><div class='line' id='LC183'>			<span class="s2">&quot;57&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;nine&quot;</span><span class="p">,</span> <span class="s2">&quot;9&quot;</span><span class="p">],</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>			<span class="c1">//numpad</span></div><div class='line' id='LC186'>			<span class="s2">&quot;96&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numzero&quot;</span><span class="p">,</span> <span class="s2">&quot;num0&quot;</span><span class="p">],</span></div><div class='line' id='LC187'>			<span class="s2">&quot;97&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numone&quot;</span><span class="p">,</span> <span class="s2">&quot;num1&quot;</span><span class="p">],</span></div><div class='line' id='LC188'>			<span class="s2">&quot;98&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numtwo&quot;</span><span class="p">,</span> <span class="s2">&quot;num2&quot;</span><span class="p">],</span></div><div class='line' id='LC189'>			<span class="s2">&quot;99&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numthree&quot;</span><span class="p">,</span> <span class="s2">&quot;num3&quot;</span><span class="p">],</span></div><div class='line' id='LC190'>			<span class="s2">&quot;100&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numfour&quot;</span><span class="p">,</span> <span class="s2">&quot;num4&quot;</span><span class="p">],</span></div><div class='line' id='LC191'>			<span class="s2">&quot;101&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numfive&quot;</span><span class="p">,</span> <span class="s2">&quot;num5&quot;</span><span class="p">],</span></div><div class='line' id='LC192'>			<span class="s2">&quot;102&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numsix&quot;</span><span class="p">,</span> <span class="s2">&quot;num6&quot;</span><span class="p">],</span></div><div class='line' id='LC193'>			<span class="s2">&quot;103&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numseven&quot;</span><span class="p">,</span> <span class="s2">&quot;num7&quot;</span><span class="p">],</span></div><div class='line' id='LC194'>			<span class="s2">&quot;104&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numeight&quot;</span><span class="p">,</span> <span class="s2">&quot;num8&quot;</span><span class="p">],</span></div><div class='line' id='LC195'>			<span class="s2">&quot;105&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numnine&quot;</span><span class="p">,</span> <span class="s2">&quot;num9&quot;</span><span class="p">],</span></div><div class='line' id='LC196'>			<span class="s2">&quot;106&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;nummultiply&quot;</span><span class="p">,</span> <span class="s2">&quot;num*&quot;</span><span class="p">],</span></div><div class='line' id='LC197'>			<span class="s2">&quot;107&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numadd&quot;</span><span class="p">,</span> <span class="s2">&quot;num+&quot;</span><span class="p">],</span></div><div class='line' id='LC198'>			<span class="s2">&quot;108&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numenter&quot;</span><span class="p">],</span></div><div class='line' id='LC199'>			<span class="s2">&quot;109&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numsubtract&quot;</span><span class="p">,</span> <span class="s2">&quot;num-&quot;</span><span class="p">],</span></div><div class='line' id='LC200'>			<span class="s2">&quot;110&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numdecimal&quot;</span><span class="p">,</span> <span class="s2">&quot;num.&quot;</span><span class="p">],</span></div><div class='line' id='LC201'>			<span class="s2">&quot;111&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numdivide&quot;</span><span class="p">,</span> <span class="s2">&quot;num/&quot;</span><span class="p">],</span></div><div class='line' id='LC202'>			<span class="s2">&quot;144&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;numlock&quot;</span><span class="p">,</span> <span class="s2">&quot;num&quot;</span><span class="p">],</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>			<span class="c1">//function keys</span></div><div class='line' id='LC205'>			<span class="s2">&quot;112&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f1&quot;</span><span class="p">],</span></div><div class='line' id='LC206'>			<span class="s2">&quot;113&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f2&quot;</span><span class="p">],</span></div><div class='line' id='LC207'>			<span class="s2">&quot;114&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f3&quot;</span><span class="p">],</span></div><div class='line' id='LC208'>			<span class="s2">&quot;115&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f4&quot;</span><span class="p">],</span></div><div class='line' id='LC209'>			<span class="s2">&quot;116&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f5&quot;</span><span class="p">],</span></div><div class='line' id='LC210'>			<span class="s2">&quot;117&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f6&quot;</span><span class="p">],</span></div><div class='line' id='LC211'>			<span class="s2">&quot;118&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f7&quot;</span><span class="p">],</span></div><div class='line' id='LC212'>			<span class="s2">&quot;119&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f8&quot;</span><span class="p">],</span></div><div class='line' id='LC213'>			<span class="s2">&quot;120&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f9&quot;</span><span class="p">],</span></div><div class='line' id='LC214'>			<span class="s2">&quot;121&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f10&quot;</span><span class="p">],</span></div><div class='line' id='LC215'>			<span class="s2">&quot;122&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f11&quot;</span><span class="p">],</span></div><div class='line' id='LC216'>			<span class="s2">&quot;123&quot;</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;f12&quot;</span><span class="p">]</span></div><div class='line' id='LC217'>		<span class="p">},</span></div><div class='line' id='LC218'>		<span class="s2">&quot;macros&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'>			<span class="c1">//secondary key symbols</span></div><div class='line' id='LC221'>			<span class="p">[</span><span class="s1">&#39;shift + `&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;tilde&quot;</span><span class="p">,</span> <span class="s2">&quot;~&quot;</span><span class="p">]],</span></div><div class='line' id='LC222'>			<span class="p">[</span><span class="s1">&#39;shift + 1&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;exclamation&quot;</span><span class="p">,</span> <span class="s2">&quot;exclamationpoint&quot;</span><span class="p">,</span> <span class="s2">&quot;!&quot;</span><span class="p">]],</span></div><div class='line' id='LC223'>			<span class="p">[</span><span class="s1">&#39;shift + 2&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;at&quot;</span><span class="p">,</span> <span class="s2">&quot;@&quot;</span><span class="p">]],</span></div><div class='line' id='LC224'>			<span class="p">[</span><span class="s1">&#39;shift + 3&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;number&quot;</span><span class="p">,</span> <span class="s2">&quot;#&quot;</span><span class="p">]],</span></div><div class='line' id='LC225'>			<span class="p">[</span><span class="s1">&#39;shift + 4&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;dollar&quot;</span><span class="p">,</span> <span class="s2">&quot;dollars&quot;</span><span class="p">,</span> <span class="s2">&quot;dollarsign&quot;</span><span class="p">,</span> <span class="s2">&quot;$&quot;</span><span class="p">]],</span></div><div class='line' id='LC226'>			<span class="p">[</span><span class="s1">&#39;shift + 5&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;percent&quot;</span><span class="p">,</span> <span class="s2">&quot;%&quot;</span><span class="p">]],</span></div><div class='line' id='LC227'>			<span class="p">[</span><span class="s1">&#39;shift + 6&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;caret&quot;</span><span class="p">,</span> <span class="s2">&quot;^&quot;</span><span class="p">]],</span></div><div class='line' id='LC228'>			<span class="p">[</span><span class="s1">&#39;shift + 7&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;ampersand&quot;</span><span class="p">,</span> <span class="s2">&quot;and&quot;</span><span class="p">,</span> <span class="s2">&quot;&amp;&quot;</span><span class="p">]],</span></div><div class='line' id='LC229'>			<span class="p">[</span><span class="s1">&#39;shift + 8&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;asterisk&quot;</span><span class="p">,</span> <span class="s2">&quot;*&quot;</span><span class="p">]],</span></div><div class='line' id='LC230'>			<span class="p">[</span><span class="s1">&#39;shift + 9&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;openparen&quot;</span><span class="p">,</span> <span class="s2">&quot;(&quot;</span><span class="p">]],</span></div><div class='line' id='LC231'>			<span class="p">[</span><span class="s1">&#39;shift + 0&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;closeparen&quot;</span><span class="p">,</span> <span class="s2">&quot;)&quot;</span><span class="p">]],</span></div><div class='line' id='LC232'>			<span class="p">[</span><span class="s1">&#39;shift + -&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;underscore&quot;</span><span class="p">,</span> <span class="s2">&quot;_&quot;</span><span class="p">]],</span></div><div class='line' id='LC233'>			<span class="p">[</span><span class="s1">&#39;shift + =&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;plus&quot;</span><span class="p">,</span> <span class="s2">&quot;+&quot;</span><span class="p">]],</span></div><div class='line' id='LC234'>			<span class="p">[</span><span class="s1">&#39;shift + (&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;opencurlybrace&quot;</span><span class="p">,</span> <span class="s2">&quot;opencurlybracket&quot;</span><span class="p">,</span> <span class="s2">&quot;{&quot;</span><span class="p">]],</span></div><div class='line' id='LC235'>			<span class="p">[</span><span class="s1">&#39;shift + )&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;closecurlybrace&quot;</span><span class="p">,</span> <span class="s2">&quot;closecurlybracket&quot;</span><span class="p">,</span> <span class="s2">&quot;}&quot;</span><span class="p">]],</span></div><div class='line' id='LC236'>			<span class="p">[</span><span class="s1">&#39;shift + \\&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;verticalbar&quot;</span><span class="p">,</span> <span class="s2">&quot;|&quot;</span><span class="p">]],</span></div><div class='line' id='LC237'>			<span class="p">[</span><span class="s1">&#39;shift + ;&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;colon&quot;</span><span class="p">,</span> <span class="s2">&quot;:&quot;</span><span class="p">]],</span></div><div class='line' id='LC238'>			<span class="p">[</span><span class="s1">&#39;shift + \&#39;&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;quotationmark&quot;</span><span class="p">,</span> <span class="s2">&quot;\&quot;&quot;</span><span class="p">]],</span></div><div class='line' id='LC239'>			<span class="p">[</span><span class="s1">&#39;shift + !,&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;openanglebracket&quot;</span><span class="p">,</span> <span class="s2">&quot;&lt;&quot;</span><span class="p">]],</span></div><div class='line' id='LC240'>			<span class="p">[</span><span class="s1">&#39;shift + .&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;closeanglebracket&quot;</span><span class="p">,</span> <span class="s2">&quot;&gt;&quot;</span><span class="p">]],</span></div><div class='line' id='LC241'>			<span class="p">[</span><span class="s1">&#39;shift + /&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;questionmark&quot;</span><span class="p">,</span> <span class="s2">&quot;?&quot;</span><span class="p">]]</span></div><div class='line' id='LC242'>		<span class="p">]</span></div><div class='line' id='LC243'>	<span class="p">};</span></div><div class='line' id='LC244'>	<span class="c1">//a-z and A-Z</span></div><div class='line' id='LC245'>	<span class="k">for</span> <span class="p">(</span><span class="nx">aI</span> <span class="o">=</span> <span class="mi">65</span><span class="p">;</span> <span class="nx">aI</span> <span class="o">&lt;=</span> <span class="mi">90</span><span class="p">;</span> <span class="nx">aI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>		<span class="nx">usLocale</span><span class="p">.</span><span class="nx">map</span><span class="p">[</span><span class="nx">aI</span><span class="p">]</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">aI</span> <span class="o">+</span> <span class="mi">32</span><span class="p">);</span></div><div class='line' id='LC247'>		<span class="nx">usLocale</span><span class="p">.</span><span class="nx">macros</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="s1">&#39;shift + &#39;</span> <span class="o">+</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">aI</span> <span class="o">+</span> <span class="mi">32</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;, capslock + &#39;</span> <span class="o">+</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">aI</span> <span class="o">+</span> <span class="mi">32</span><span class="p">),</span> <span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">aI</span><span class="p">)]]);</span></div><div class='line' id='LC248'>	<span class="p">}</span></div><div class='line' id='LC249'>	<span class="nx">registerLocale</span><span class="p">(</span><span class="s1">&#39;us&#39;</span><span class="p">,</span> <span class="nx">usLocale</span><span class="p">);</span></div><div class='line' id='LC250'>	<span class="nx">getSetLocale</span><span class="p">(</span><span class="s1">&#39;us&#39;</span><span class="p">);</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'>	<span class="c1">//////////</span></div><div class='line' id='LC254'>	<span class="c1">// INIT //</span></div><div class='line' id='LC255'>	<span class="c1">//////////</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>	<span class="c1">//enable the library</span></div><div class='line' id='LC258'>	<span class="nx">enable</span><span class="p">();</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>	<span class="c1">/////////</span></div><div class='line' id='LC262'>	<span class="c1">// API //</span></div><div class='line' id='LC263'>	<span class="c1">/////////</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>	<span class="c1">//assemble the library and return it</span></div><div class='line' id='LC266'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">enable</span> <span class="o">=</span> <span class="nx">enable</span><span class="p">;</span></div><div class='line' id='LC267'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">disable</span> <span class="o">=</span> <span class="nx">disable</span><span class="p">;</span></div><div class='line' id='LC268'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">activeKeys</span> <span class="o">=</span> <span class="nx">getActiveKeys</span><span class="p">;</span></div><div class='line' id='LC269'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">on</span> <span class="o">=</span> <span class="nx">createBinding</span><span class="p">;</span></div><div class='line' id='LC270'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="nx">removeBindingByKeyCombo</span><span class="p">;</span></div><div class='line' id='LC271'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">clear</span><span class="p">.</span><span class="nx">key</span> <span class="o">=</span> <span class="nx">removeBindingByKeyName</span><span class="p">;</span></div><div class='line' id='LC272'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">locale</span> <span class="o">=</span> <span class="nx">getSetLocale</span><span class="p">;</span></div><div class='line' id='LC273'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">locale</span><span class="p">.</span><span class="nx">register</span> <span class="o">=</span> <span class="nx">registerLocale</span><span class="p">;</span></div><div class='line' id='LC274'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">macro</span> <span class="o">=</span> <span class="nx">createMacro</span><span class="p">;</span></div><div class='line' id='LC275'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">macro</span><span class="p">.</span><span class="nx">remove</span> <span class="o">=</span> <span class="nx">removeMacro</span><span class="p">;</span></div><div class='line' id='LC276'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">key</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC277'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">key</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">getKeyName</span><span class="p">;</span></div><div class='line' id='LC278'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">key</span><span class="p">.</span><span class="nx">code</span> <span class="o">=</span> <span class="nx">getKeyCode</span><span class="p">;</span></div><div class='line' id='LC279'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">combo</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC280'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">combo</span><span class="p">.</span><span class="nx">active</span> <span class="o">=</span> <span class="nx">isSatisfiedCombo</span><span class="p">;</span></div><div class='line' id='LC281'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">combo</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="nx">parseKeyCombo</span><span class="p">;</span></div><div class='line' id='LC282'>	<span class="nx">KeyboardJS</span><span class="p">.</span><span class="nx">combo</span><span class="p">.</span><span class="nx">stringify</span> <span class="o">=</span> <span class="nx">stringifyKeyCombo</span><span class="p">;</span></div><div class='line' id='LC283'>	<span class="k">return</span> <span class="nx">KeyboardJS</span><span class="p">;</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>	<span class="c1">//////////////////////</span></div><div class='line' id='LC287'>	<span class="c1">// INSTANCE METHODS //</span></div><div class='line' id='LC288'>	<span class="c1">//////////////////////</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>	<span class="cm">/**</span></div><div class='line' id='LC291'><span class="cm">	 * Enables KeyboardJS</span></div><div class='line' id='LC292'><span class="cm">	 */</span></div><div class='line' id='LC293'>	<span class="kd">function</span> <span class="nx">enable</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC294'>		<span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC295'>			<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;keydown&#39;</span><span class="p">,</span> <span class="nx">keydown</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC296'>			<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;keyup&#39;</span><span class="p">,</span> <span class="nx">keyup</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC297'>			<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;blur&#39;</span><span class="p">,</span> <span class="nx">reset</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC298'>			<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;webkitfullscreenchange&#39;</span><span class="p">,</span> <span class="nx">reset</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC299'>			<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;mozfullscreenchange&#39;</span><span class="p">,</span> <span class="nx">reset</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC300'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>			<span class="nb">document</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s1">&#39;onkeydown&#39;</span><span class="p">,</span> <span class="nx">keydown</span><span class="p">);</span></div><div class='line' id='LC302'>			<span class="nb">document</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s1">&#39;onkeyup&#39;</span><span class="p">,</span> <span class="nx">keyup</span><span class="p">);</span></div><div class='line' id='LC303'>			<span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s1">&#39;onblur&#39;</span><span class="p">,</span> <span class="nx">reset</span><span class="p">);</span></div><div class='line' id='LC304'>		<span class="p">}</span></div><div class='line' id='LC305'>	<span class="p">}</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'>	<span class="cm">/**</span></div><div class='line' id='LC308'><span class="cm">	 * Exits all active bindings and disables KeyboardJS</span></div><div class='line' id='LC309'><span class="cm">	 */</span></div><div class='line' id='LC310'>	<span class="kd">function</span> <span class="nx">disable</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC311'>		<span class="nx">reset</span><span class="p">();</span></div><div class='line' id='LC312'>		<span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC313'>			<span class="nb">document</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;keydown&#39;</span><span class="p">,</span> <span class="nx">keydown</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC314'>			<span class="nb">document</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;keyup&#39;</span><span class="p">,</span> <span class="nx">keyup</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC315'>			<span class="nb">window</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;blur&#39;</span><span class="p">,</span> <span class="nx">reset</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC316'>			<span class="nb">window</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;webkitfullscreenchange&#39;</span><span class="p">,</span> <span class="nx">reset</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC317'>			<span class="nb">window</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;mozfullscreenchange&#39;</span><span class="p">,</span> <span class="nx">reset</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC318'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC319'>			<span class="nb">document</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">(</span><span class="s1">&#39;onkeydown&#39;</span><span class="p">,</span> <span class="nx">keydown</span><span class="p">);</span></div><div class='line' id='LC320'>			<span class="nb">document</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">(</span><span class="s1">&#39;onkeyup&#39;</span><span class="p">,</span> <span class="nx">keyup</span><span class="p">);</span></div><div class='line' id='LC321'>			<span class="nb">window</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">(</span><span class="s1">&#39;onblur&#39;</span><span class="p">,</span> <span class="nx">reset</span><span class="p">);</span></div><div class='line' id='LC322'>		<span class="p">}</span></div><div class='line' id='LC323'>	<span class="p">}</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'><br/></div><div class='line' id='LC326'>	<span class="c1">////////////////////</span></div><div class='line' id='LC327'>	<span class="c1">// EVENT HANDLERS //</span></div><div class='line' id='LC328'>	<span class="c1">////////////////////</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>	<span class="cm">/**</span></div><div class='line' id='LC331'><span class="cm">	 * Exits all active bindings. Optionally passes an event to all binding</span></div><div class='line' id='LC332'><span class="cm">	 *  handlers.</span></div><div class='line' id='LC333'><span class="cm">	 * @param  {KeyboardEvent}	event	[Optional]</span></div><div class='line' id='LC334'><span class="cm">	 */</span></div><div class='line' id='LC335'>	<span class="kd">function</span> <span class="nx">reset</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC336'>		<span class="nx">activeKeys</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC337'>		<span class="nx">pruneMacros</span><span class="p">();</span></div><div class='line' id='LC338'>		<span class="nx">pruneBindings</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC339'>	<span class="p">}</span></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>	<span class="cm">/**</span></div><div class='line' id='LC342'><span class="cm">	 * Key down event handler.</span></div><div class='line' id='LC343'><span class="cm">	 * @param  {KeyboardEvent}	event</span></div><div class='line' id='LC344'><span class="cm">	 */</span></div><div class='line' id='LC345'>	<span class="kd">function</span> <span class="nx">keydown</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC346'>		<span class="kd">var</span> <span class="nx">keyNames</span><span class="p">,</span> <span class="nx">keyName</span><span class="p">,</span> <span class="nx">kI</span><span class="p">;</span></div><div class='line' id='LC347'>		<span class="nx">keyNames</span> <span class="o">=</span> <span class="nx">getKeyName</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">);</span></div><div class='line' id='LC348'>		<span class="k">if</span><span class="p">(</span><span class="nx">keyNames</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC349'>		<span class="nx">event</span><span class="p">.</span><span class="nx">isRepeat</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC350'>		<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">keyNames</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC351'>		    <span class="nx">keyName</span> <span class="o">=</span> <span class="nx">keyNames</span><span class="p">[</span><span class="nx">kI</span><span class="p">];</span></div><div class='line' id='LC352'>		    <span class="k">if</span> <span class="p">(</span><span class="nx">getActiveKeys</span><span class="p">().</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC353'>		        <span class="nx">event</span><span class="p">.</span><span class="nx">isRepeat</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC354'>			<span class="nx">addActiveKey</span><span class="p">(</span><span class="nx">keyName</span><span class="p">);</span></div><div class='line' id='LC355'>		<span class="p">}</span></div><div class='line' id='LC356'>		<span class="nx">executeMacros</span><span class="p">();</span></div><div class='line' id='LC357'>		<span class="nx">executeBindings</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC358'>	<span class="p">}</span></div><div class='line' id='LC359'><br/></div><div class='line' id='LC360'>	<span class="cm">/**</span></div><div class='line' id='LC361'><span class="cm">	 * Key up event handler.</span></div><div class='line' id='LC362'><span class="cm">	 * @param  {KeyboardEvent} event</span></div><div class='line' id='LC363'><span class="cm">	 */</span></div><div class='line' id='LC364'>	<span class="kd">function</span> <span class="nx">keyup</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC365'>		<span class="kd">var</span> <span class="nx">keyNames</span><span class="p">,</span> <span class="nx">kI</span><span class="p">;</span></div><div class='line' id='LC366'>		<span class="nx">keyNames</span> <span class="o">=</span> <span class="nx">getKeyName</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">);</span></div><div class='line' id='LC367'>		<span class="k">if</span><span class="p">(</span><span class="nx">keyNames</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC368'>		<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">keyNames</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC369'>			<span class="nx">removeActiveKey</span><span class="p">(</span><span class="nx">keyNames</span><span class="p">[</span><span class="nx">kI</span><span class="p">]);</span></div><div class='line' id='LC370'>		<span class="p">}</span></div><div class='line' id='LC371'>		<span class="nx">pruneMacros</span><span class="p">();</span></div><div class='line' id='LC372'>		<span class="nx">pruneBindings</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC373'>	<span class="p">}</span></div><div class='line' id='LC374'><br/></div><div class='line' id='LC375'>	<span class="cm">/**</span></div><div class='line' id='LC376'><span class="cm">	 * Accepts a key code and returns the key names defined by the current</span></div><div class='line' id='LC377'><span class="cm">	 *  locale.</span></div><div class='line' id='LC378'><span class="cm">	 * @param  {Number}	keyCode</span></div><div class='line' id='LC379'><span class="cm">	 * @return {Array}	keyNames	An array of key names defined for the key</span></div><div class='line' id='LC380'><span class="cm">	 *  code as defined by the current locale.</span></div><div class='line' id='LC381'><span class="cm">	 */</span></div><div class='line' id='LC382'>	<span class="kd">function</span> <span class="nx">getKeyName</span><span class="p">(</span><span class="nx">keyCode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC383'>		<span class="k">return</span> <span class="nx">map</span><span class="p">[</span><span class="nx">keyCode</span><span class="p">]</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC384'>	<span class="p">}</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>	<span class="cm">/**</span></div><div class='line' id='LC387'><span class="cm">	 * Accepts a key name and returns the key code defined by the current</span></div><div class='line' id='LC388'><span class="cm">	 *  locale.</span></div><div class='line' id='LC389'><span class="cm">	 * @param  {Number}	keyName</span></div><div class='line' id='LC390'><span class="cm">	 * @return {Number|false}</span></div><div class='line' id='LC391'><span class="cm">	 */</span></div><div class='line' id='LC392'>	<span class="kd">function</span> <span class="nx">getKeyCode</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC393'>		<span class="kd">var</span> <span class="nx">keyCode</span><span class="p">;</span></div><div class='line' id='LC394'>		<span class="k">for</span><span class="p">(</span><span class="nx">keyCode</span> <span class="k">in</span> <span class="nx">map</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC395'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">map</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">keyCode</span><span class="p">))</span> <span class="p">{</span> <span class="k">continue</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC396'>			<span class="k">if</span><span class="p">(</span><span class="nx">map</span><span class="p">[</span><span class="nx">keyCode</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">keyCode</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC397'>		<span class="p">}</span></div><div class='line' id='LC398'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC399'>	<span class="p">}</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'><br/></div><div class='line' id='LC402'>	<span class="c1">////////////</span></div><div class='line' id='LC403'>	<span class="c1">// MACROS //</span></div><div class='line' id='LC404'>	<span class="c1">////////////</span></div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>	<span class="cm">/**</span></div><div class='line' id='LC407'><span class="cm">	 * Accepts a key combo and an array of key names to inject once the key</span></div><div class='line' id='LC408'><span class="cm">	 *  combo is satisfied.</span></div><div class='line' id='LC409'><span class="cm">	 * @param  {String}	combo</span></div><div class='line' id='LC410'><span class="cm">	 * @param  {Array}	injectedKeys</span></div><div class='line' id='LC411'><span class="cm">	 */</span></div><div class='line' id='LC412'>	<span class="kd">function</span> <span class="nx">createMacro</span><span class="p">(</span><span class="nx">combo</span><span class="p">,</span> <span class="nx">injectedKeys</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC413'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">combo</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">combo</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">combo</span><span class="p">.</span><span class="nx">push</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC414'>			<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Cannot create macro. The combo must be a string or array.&quot;</span><span class="p">);</span></div><div class='line' id='LC415'>		<span class="p">}</span></div><div class='line' id='LC416'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">injectedKeys</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">injectedKeys</span><span class="p">.</span><span class="nx">push</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC417'>			<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Cannot create macro. The injectedKeys must be an array.&quot;</span><span class="p">);</span></div><div class='line' id='LC418'>		<span class="p">}</span></div><div class='line' id='LC419'>		<span class="nx">macros</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">combo</span><span class="p">,</span> <span class="nx">injectedKeys</span><span class="p">]);</span></div><div class='line' id='LC420'>	<span class="p">}</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>	<span class="cm">/**</span></div><div class='line' id='LC423'><span class="cm">	 * Accepts a key combo and clears any and all macros bound to that key</span></div><div class='line' id='LC424'><span class="cm">	 * combo.</span></div><div class='line' id='LC425'><span class="cm">	 * @param  {String} combo</span></div><div class='line' id='LC426'><span class="cm">	 */</span></div><div class='line' id='LC427'>	<span class="kd">function</span> <span class="nx">removeMacro</span><span class="p">(</span><span class="nx">combo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC428'>		<span class="kd">var</span> <span class="nx">macro</span><span class="p">;</span></div><div class='line' id='LC429'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">combo</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">combo</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">combo</span><span class="p">.</span><span class="nx">push</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">))</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Cannot remove macro. The combo must be a string or array.&quot;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC430'>		<span class="k">for</span><span class="p">(</span><span class="nx">mI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">mI</span> <span class="o">&lt;</span> <span class="nx">macros</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">mI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC431'>			<span class="nx">macro</span> <span class="o">=</span> <span class="nx">macros</span><span class="p">[</span><span class="nx">mI</span><span class="p">];</span></div><div class='line' id='LC432'>			<span class="k">if</span><span class="p">(</span><span class="nx">compareCombos</span><span class="p">(</span><span class="nx">combo</span><span class="p">,</span> <span class="nx">macro</span><span class="p">[</span><span class="mi">0</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC433'>				<span class="nx">removeActiveKey</span><span class="p">(</span><span class="nx">macro</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC434'>				<span class="nx">macros</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">mI</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC435'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC436'>			<span class="p">}</span></div><div class='line' id='LC437'>		<span class="p">}</span></div><div class='line' id='LC438'>	<span class="p">}</span></div><div class='line' id='LC439'><br/></div><div class='line' id='LC440'>	<span class="cm">/**</span></div><div class='line' id='LC441'><span class="cm">	 * Executes macros against the active keys. Each macro&#39;s key combo is</span></div><div class='line' id='LC442'><span class="cm">	 *  checked and if found to be satisfied, the macro&#39;s key names are injected</span></div><div class='line' id='LC443'><span class="cm">	 *  into active keys.</span></div><div class='line' id='LC444'><span class="cm">	 */</span></div><div class='line' id='LC445'>	<span class="kd">function</span> <span class="nx">executeMacros</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC446'>		<span class="kd">var</span> <span class="nx">mI</span><span class="p">,</span> <span class="nx">combo</span><span class="p">,</span> <span class="nx">kI</span><span class="p">;</span></div><div class='line' id='LC447'>		<span class="k">for</span><span class="p">(</span><span class="nx">mI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">mI</span> <span class="o">&lt;</span> <span class="nx">macros</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">mI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC448'>			<span class="nx">combo</span> <span class="o">=</span> <span class="nx">parseKeyCombo</span><span class="p">(</span><span class="nx">macros</span><span class="p">[</span><span class="nx">mI</span><span class="p">][</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC449'>			<span class="k">if</span><span class="p">(</span><span class="nx">activeMacros</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">macros</span><span class="p">[</span><span class="nx">mI</span><span class="p">])</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">isSatisfiedCombo</span><span class="p">(</span><span class="nx">combo</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC450'>				<span class="nx">activeMacros</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">macros</span><span class="p">[</span><span class="nx">mI</span><span class="p">]);</span></div><div class='line' id='LC451'>				<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">macros</span><span class="p">[</span><span class="nx">mI</span><span class="p">][</span><span class="mi">1</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC452'>					<span class="nx">addActiveKey</span><span class="p">(</span><span class="nx">macros</span><span class="p">[</span><span class="nx">mI</span><span class="p">][</span><span class="mi">1</span><span class="p">][</span><span class="nx">kI</span><span class="p">]);</span></div><div class='line' id='LC453'>				<span class="p">}</span></div><div class='line' id='LC454'>			<span class="p">}</span></div><div class='line' id='LC455'>		<span class="p">}</span></div><div class='line' id='LC456'>	<span class="p">}</span></div><div class='line' id='LC457'><br/></div><div class='line' id='LC458'>	<span class="cm">/**</span></div><div class='line' id='LC459'><span class="cm">	 * Prunes active macros. Checks each active macro&#39;s key combo and if found</span></div><div class='line' id='LC460'><span class="cm">	 *  to no longer to be satisfied, each of the macro&#39;s key names are removed</span></div><div class='line' id='LC461'><span class="cm">	 *  from active keys.</span></div><div class='line' id='LC462'><span class="cm">	 */</span></div><div class='line' id='LC463'>	<span class="kd">function</span> <span class="nx">pruneMacros</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC464'>		<span class="kd">var</span> <span class="nx">mI</span><span class="p">,</span> <span class="nx">combo</span><span class="p">,</span> <span class="nx">kI</span><span class="p">;</span></div><div class='line' id='LC465'>		<span class="k">for</span><span class="p">(</span><span class="nx">mI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">mI</span> <span class="o">&lt;</span> <span class="nx">activeMacros</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">mI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC466'>			<span class="nx">combo</span> <span class="o">=</span> <span class="nx">parseKeyCombo</span><span class="p">(</span><span class="nx">activeMacros</span><span class="p">[</span><span class="nx">mI</span><span class="p">][</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC467'>			<span class="k">if</span><span class="p">(</span><span class="nx">isSatisfiedCombo</span><span class="p">(</span><span class="nx">combo</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC468'>				<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">activeMacros</span><span class="p">[</span><span class="nx">mI</span><span class="p">][</span><span class="mi">1</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC469'>					<span class="nx">removeActiveKey</span><span class="p">(</span><span class="nx">activeMacros</span><span class="p">[</span><span class="nx">mI</span><span class="p">][</span><span class="mi">1</span><span class="p">][</span><span class="nx">kI</span><span class="p">]);</span></div><div class='line' id='LC470'>				<span class="p">}</span></div><div class='line' id='LC471'>				<span class="nx">activeMacros</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">mI</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC472'>				<span class="nx">mI</span> <span class="o">-=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC473'>			<span class="p">}</span></div><div class='line' id='LC474'>		<span class="p">}</span></div><div class='line' id='LC475'>	<span class="p">}</span></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'><br/></div><div class='line' id='LC478'>	<span class="c1">//////////////</span></div><div class='line' id='LC479'>	<span class="c1">// BINDINGS //</span></div><div class='line' id='LC480'>	<span class="c1">//////////////</span></div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'>	<span class="cm">/**</span></div><div class='line' id='LC483'><span class="cm">	 * Creates a binding object, and, if provided, binds a key down hander and</span></div><div class='line' id='LC484'><span class="cm">	 *  a key up handler. Returns a binding object that emits keyup and</span></div><div class='line' id='LC485'><span class="cm">	 *  keydown events.</span></div><div class='line' id='LC486'><span class="cm">	 * @param  {String}		keyCombo</span></div><div class='line' id='LC487'><span class="cm">	 * @param  {Function}	keyDownCallback	[Optional]</span></div><div class='line' id='LC488'><span class="cm">	 * @param  {Function}	keyUpCallback	[Optional]</span></div><div class='line' id='LC489'><span class="cm">	 * @return {Object}		binding</span></div><div class='line' id='LC490'><span class="cm">	 */</span></div><div class='line' id='LC491'>	<span class="kd">function</span> <span class="nx">createBinding</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">,</span> <span class="nx">keyDownCallback</span><span class="p">,</span> <span class="nx">keyUpCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC492'>		<span class="kd">var</span> <span class="nx">api</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">binding</span><span class="p">,</span> <span class="nx">subBindings</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">bindingApi</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">kI</span><span class="p">,</span></div><div class='line' id='LC493'>		<span class="nx">subCombo</span><span class="p">;</span></div><div class='line' id='LC494'><br/></div><div class='line' id='LC495'>		<span class="c1">//break the combo down into a combo array</span></div><div class='line' id='LC496'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">keyCombo</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC497'>			<span class="nx">keyCombo</span> <span class="o">=</span> <span class="nx">parseKeyCombo</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">);</span></div><div class='line' id='LC498'>		<span class="p">}</span></div><div class='line' id='LC499'><br/></div><div class='line' id='LC500'>		<span class="c1">//bind each sub combo contained within the combo string</span></div><div class='line' id='LC501'>		<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">keyCombo</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC502'>			<span class="nx">binding</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC503'><br/></div><div class='line' id='LC504'>			<span class="c1">//stringify the combo again</span></div><div class='line' id='LC505'>			<span class="nx">subCombo</span> <span class="o">=</span> <span class="nx">stringifyKeyCombo</span><span class="p">([</span><span class="nx">keyCombo</span><span class="p">[</span><span class="nx">kI</span><span class="p">]]);</span></div><div class='line' id='LC506'><br/></div><div class='line' id='LC507'>			<span class="c1">//validate the sub combo</span></div><div class='line' id='LC508'>			<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">subCombo</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Failed to bind key combo. The key combo must be string.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC509'><br/></div><div class='line' id='LC510'>			<span class="c1">//create the binding</span></div><div class='line' id='LC511'>			<span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span> <span class="o">=</span> <span class="nx">subCombo</span><span class="p">;</span></div><div class='line' id='LC512'>			<span class="nx">binding</span><span class="p">.</span><span class="nx">keyDownCallback</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC513'>			<span class="nx">binding</span><span class="p">.</span><span class="nx">keyUpCallback</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC514'><br/></div><div class='line' id='LC515'>			<span class="c1">//inject the key down and key up callbacks if given</span></div><div class='line' id='LC516'>			<span class="k">if</span><span class="p">(</span><span class="nx">keyDownCallback</span><span class="p">)</span> <span class="p">{</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">keyDownCallback</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">keyDownCallback</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC517'>			<span class="k">if</span><span class="p">(</span><span class="nx">keyUpCallback</span><span class="p">)</span> <span class="p">{</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">keyUpCallback</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">keyUpCallback</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC518'><br/></div><div class='line' id='LC519'>			<span class="c1">//stash the new binding</span></div><div class='line' id='LC520'>			<span class="nx">bindings</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">binding</span><span class="p">);</span></div><div class='line' id='LC521'>			<span class="nx">subBindings</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">binding</span><span class="p">);</span></div><div class='line' id='LC522'>		<span class="p">}</span></div><div class='line' id='LC523'><br/></div><div class='line' id='LC524'>		<span class="c1">//build the binding api</span></div><div class='line' id='LC525'>		<span class="nx">api</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="nx">clear</span><span class="p">;</span></div><div class='line' id='LC526'>		<span class="nx">api</span><span class="p">.</span><span class="nx">on</span> <span class="o">=</span> <span class="nx">on</span><span class="p">;</span></div><div class='line' id='LC527'>		<span class="k">return</span> <span class="nx">api</span><span class="p">;</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>		<span class="cm">/**</span></div><div class='line' id='LC530'><span class="cm">		 * Clears the binding</span></div><div class='line' id='LC531'><span class="cm">		 */</span></div><div class='line' id='LC532'>		<span class="kd">function</span> <span class="nx">clear</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC533'>			<span class="kd">var</span> <span class="nx">bI</span><span class="p">;</span></div><div class='line' id='LC534'>			<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">subBindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC535'>				<span class="nx">bindings</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">bindings</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">subBindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">]),</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC536'>			<span class="p">}</span></div><div class='line' id='LC537'>		<span class="p">}</span></div><div class='line' id='LC538'><br/></div><div class='line' id='LC539'>		<span class="cm">/**</span></div><div class='line' id='LC540'><span class="cm">		 * Accepts an event name. and any number of callbacks. When the event is</span></div><div class='line' id='LC541'><span class="cm">		 *  emitted, all callbacks are executed. Available events are key up and</span></div><div class='line' id='LC542'><span class="cm">		 *  key down.</span></div><div class='line' id='LC543'><span class="cm">		 * @param  {String}	eventName</span></div><div class='line' id='LC544'><span class="cm">		 * @return {Object}	subBinding</span></div><div class='line' id='LC545'><span class="cm">		 */</span></div><div class='line' id='LC546'>		<span class="kd">function</span> <span class="nx">on</span><span class="p">(</span><span class="nx">eventName</span>    <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC547'>			<span class="kd">var</span> <span class="nx">api</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">callbacks</span><span class="p">,</span> <span class="nx">cI</span><span class="p">,</span> <span class="nx">bI</span><span class="p">;</span></div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'>			<span class="c1">//validate event name</span></div><div class='line' id='LC550'>			<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">eventName</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot bind callback. The event name must be a string.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC551'>			<span class="k">if</span><span class="p">(</span><span class="nx">eventName</span> <span class="o">!==</span> <span class="s1">&#39;keyup&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">eventName</span> <span class="o">!==</span> <span class="s1">&#39;keydown&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot bind callback. The event name must be a &quot;keyup&quot; or &quot;keydown&quot;.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC552'><br/></div><div class='line' id='LC553'>			<span class="c1">//gather the callbacks</span></div><div class='line' id='LC554'>			<span class="nx">callbacks</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC555'><br/></div><div class='line' id='LC556'>			<span class="c1">//stash each the new binding</span></div><div class='line' id='LC557'>			<span class="k">for</span><span class="p">(</span><span class="nx">cI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">&lt;</span> <span class="nx">callbacks</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC558'>				<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">callbacks</span><span class="p">[</span><span class="nx">cI</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC559'>					<span class="k">if</span><span class="p">(</span><span class="nx">eventName</span> <span class="o">===</span> <span class="s1">&#39;keyup&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC560'>						<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">subBindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC561'>							<span class="nx">subBindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">].</span><span class="nx">keyUpCallback</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">[</span><span class="nx">cI</span><span class="p">]);</span></div><div class='line' id='LC562'>						<span class="p">}</span></div><div class='line' id='LC563'>					<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">eventName</span> <span class="o">===</span> <span class="s1">&#39;keydown&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC564'>						<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">subBindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC565'>							<span class="nx">subBindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">].</span><span class="nx">keyDownCallback</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">[</span><span class="nx">cI</span><span class="p">]);</span></div><div class='line' id='LC566'>						<span class="p">}</span></div><div class='line' id='LC567'>					<span class="p">}</span></div><div class='line' id='LC568'>				<span class="p">}</span></div><div class='line' id='LC569'>			<span class="p">}</span></div><div class='line' id='LC570'><br/></div><div class='line' id='LC571'>			<span class="c1">//construct and return the sub binding api</span></div><div class='line' id='LC572'>			<span class="nx">api</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="nx">clear</span><span class="p">;</span></div><div class='line' id='LC573'>			<span class="k">return</span> <span class="nx">api</span><span class="p">;</span></div><div class='line' id='LC574'><br/></div><div class='line' id='LC575'>			<span class="cm">/**</span></div><div class='line' id='LC576'><span class="cm">			 * Clears the binding</span></div><div class='line' id='LC577'><span class="cm">			 */</span></div><div class='line' id='LC578'>			<span class="kd">function</span> <span class="nx">clear</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC579'>				<span class="kd">var</span> <span class="nx">cI</span><span class="p">,</span> <span class="nx">bI</span><span class="p">;</span></div><div class='line' id='LC580'>				<span class="k">for</span><span class="p">(</span><span class="nx">cI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">&lt;</span> <span class="nx">callbacks</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC581'>					<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">callbacks</span><span class="p">[</span><span class="nx">cI</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC582'>						<span class="k">if</span><span class="p">(</span><span class="nx">eventName</span> <span class="o">===</span> <span class="s1">&#39;keyup&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC583'>							<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">subBindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC584'>								<span class="nx">subBindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">].</span><span class="nx">keyUpCallback</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">subBindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">].</span><span class="nx">keyUpCallback</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">[</span><span class="nx">cI</span><span class="p">]),</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC585'>							<span class="p">}</span></div><div class='line' id='LC586'>						<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC587'>							<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">subBindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC588'>								<span class="nx">subBindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">].</span><span class="nx">keyDownCallback</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">subBindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">].</span><span class="nx">keyDownCallback</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">[</span><span class="nx">cI</span><span class="p">]),</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC589'>							<span class="p">}</span></div><div class='line' id='LC590'>						<span class="p">}</span></div><div class='line' id='LC591'>					<span class="p">}</span></div><div class='line' id='LC592'>				<span class="p">}</span></div><div class='line' id='LC593'>			<span class="p">}</span></div><div class='line' id='LC594'>		<span class="p">}</span></div><div class='line' id='LC595'>	<span class="p">}</span></div><div class='line' id='LC596'><br/></div><div class='line' id='LC597'>	<span class="cm">/**</span></div><div class='line' id='LC598'><span class="cm">	 * Clears all binding attached to a given key combo. Key name order does not</span></div><div class='line' id='LC599'><span class="cm">	 * matter as long as the key combos equate.</span></div><div class='line' id='LC600'><span class="cm">	 * @param  {String}	keyCombo</span></div><div class='line' id='LC601'><span class="cm">	 */</span></div><div class='line' id='LC602'>	<span class="kd">function</span> <span class="nx">removeBindingByKeyCombo</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC603'>		<span class="kd">var</span> <span class="nx">bI</span><span class="p">,</span> <span class="nx">binding</span><span class="p">,</span> <span class="nx">keyName</span><span class="p">;</span></div><div class='line' id='LC604'>		<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">bindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC605'>			<span class="nx">binding</span> <span class="o">=</span> <span class="nx">bindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">];</span></div><div class='line' id='LC606'>			<span class="k">if</span><span class="p">(</span><span class="nx">compareCombos</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">,</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC607'>				<span class="nx">bindings</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">bI</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span> <span class="nx">bI</span> <span class="o">-=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC608'>			<span class="p">}</span></div><div class='line' id='LC609'>		<span class="p">}</span></div><div class='line' id='LC610'>	<span class="p">}</span></div><div class='line' id='LC611'><br/></div><div class='line' id='LC612'>	<span class="cm">/**</span></div><div class='line' id='LC613'><span class="cm">	 * Clears all binding attached to key combos containing a given key name.</span></div><div class='line' id='LC614'><span class="cm">	 * @param  {String}	keyName</span></div><div class='line' id='LC615'><span class="cm">	 */</span></div><div class='line' id='LC616'>	<span class="kd">function</span> <span class="nx">removeBindingByKeyName</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC617'>		<span class="kd">var</span> <span class="nx">bI</span><span class="p">,</span> <span class="nx">kI</span><span class="p">,</span> <span class="nx">binding</span><span class="p">;</span></div><div class='line' id='LC618'>		<span class="k">if</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC619'>			<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">bindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC620'>				<span class="nx">binding</span> <span class="o">=</span> <span class="nx">bindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">];</span></div><div class='line' id='LC621'>				<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC622'>					<span class="k">if</span><span class="p">(</span><span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span><span class="p">[</span><span class="nx">kI</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC623'>						<span class="nx">bindings</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">bI</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span> <span class="nx">bI</span> <span class="o">-=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC624'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC625'>					<span class="p">}</span></div><div class='line' id='LC626'>				<span class="p">}</span></div><div class='line' id='LC627'>			<span class="p">}</span></div><div class='line' id='LC628'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC629'>			<span class="nx">bindings</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC630'>		<span class="p">}</span></div><div class='line' id='LC631'>	<span class="p">}</span></div><div class='line' id='LC632'><br/></div><div class='line' id='LC633'>	<span class="cm">/**</span></div><div class='line' id='LC634'><span class="cm">	 * Executes bindings that are active. Only allows the keys to be used once</span></div><div class='line' id='LC635'><span class="cm">	 *  as to prevent binding overlap.</span></div><div class='line' id='LC636'><span class="cm">	 * @param  {KeyboardEvent}	event	The keyboard event.</span></div><div class='line' id='LC637'><span class="cm">	 */</span></div><div class='line' id='LC638'>	<span class="kd">function</span> <span class="nx">executeBindings</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC639'>		<span class="kd">var</span> <span class="nx">bI</span><span class="p">,</span> <span class="nx">sBI</span><span class="p">,</span> <span class="nx">binding</span><span class="p">,</span> <span class="nx">bindingKeys</span><span class="p">,</span> <span class="nx">remainingKeys</span><span class="p">,</span> <span class="nx">cI</span><span class="p">,</span> <span class="nx">killEventBubble</span><span class="p">,</span> <span class="nx">kI</span><span class="p">,</span> <span class="nx">bindingKeysSatisfied</span><span class="p">,</span></div><div class='line' id='LC640'>		<span class="nx">index</span><span class="p">,</span> <span class="nx">sortedBindings</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">bindingWeight</span><span class="p">;</span></div><div class='line' id='LC641'><br/></div><div class='line' id='LC642'>		<span class="nx">remainingKeys</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">activeKeys</span><span class="p">);</span></div><div class='line' id='LC643'>		<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">bindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC644'>			<span class="nx">bindingWeight</span> <span class="o">=</span> <span class="nx">extractComboKeys</span><span class="p">(</span><span class="nx">bindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">].</span><span class="nx">keyCombo</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC645'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">sortedBindings</span><span class="p">[</span><span class="nx">bindingWeight</span><span class="p">])</span> <span class="p">{</span> <span class="nx">sortedBindings</span><span class="p">[</span><span class="nx">bindingWeight</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span> <span class="p">}</span></div><div class='line' id='LC646'>			<span class="nx">sortedBindings</span><span class="p">[</span><span class="nx">bindingWeight</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">bindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">]);</span></div><div class='line' id='LC647'>		<span class="p">}</span></div><div class='line' id='LC648'>		<span class="k">for</span><span class="p">(</span><span class="nx">sBI</span> <span class="o">=</span> <span class="nx">sortedBindings</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">sBI</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">sBI</span> <span class="o">-=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC649'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">sortedBindings</span><span class="p">[</span><span class="nx">sBI</span><span class="p">])</span> <span class="p">{</span> <span class="k">continue</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC650'>			<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">sortedBindings</span><span class="p">[</span><span class="nx">sBI</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC651'>				<span class="nx">binding</span> <span class="o">=</span> <span class="nx">sortedBindings</span><span class="p">[</span><span class="nx">sBI</span><span class="p">][</span><span class="nx">bI</span><span class="p">];</span></div><div class='line' id='LC652'>				<span class="nx">bindingKeys</span> <span class="o">=</span> <span class="nx">extractComboKeys</span><span class="p">(</span><span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span><span class="p">);</span></div><div class='line' id='LC653'>				<span class="nx">bindingKeysSatisfied</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC654'>				<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">bindingKeys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC655'>					<span class="k">if</span><span class="p">(</span><span class="nx">remainingKeys</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">bindingKeys</span><span class="p">[</span><span class="nx">kI</span><span class="p">])</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC656'>						<span class="nx">bindingKeysSatisfied</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC657'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC658'>					<span class="p">}</span></div><div class='line' id='LC659'>				<span class="p">}</span></div><div class='line' id='LC660'>				<span class="k">if</span><span class="p">(</span><span class="nx">bindingKeysSatisfied</span> <span class="o">&amp;&amp;</span> <span class="nx">isSatisfiedCombo</span><span class="p">(</span><span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC661'>					<span class="nx">activeBindings</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">binding</span><span class="p">);</span></div><div class='line' id='LC662'>					<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">bindingKeys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC663'>						<span class="nx">index</span> <span class="o">=</span> <span class="nx">remainingKeys</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">bindingKeys</span><span class="p">[</span><span class="nx">kI</span><span class="p">]);</span></div><div class='line' id='LC664'>						<span class="k">if</span><span class="p">(</span><span class="nx">index</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC665'>							<span class="nx">remainingKeys</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC666'>							<span class="nx">kI</span> <span class="o">-=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC667'>						<span class="p">}</span></div><div class='line' id='LC668'>					<span class="p">}</span></div><div class='line' id='LC669'>					<span class="k">for</span><span class="p">(</span><span class="nx">cI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">&lt;</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">keyDownCallback</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC670'>						<span class="k">if</span> <span class="p">(</span><span class="nx">binding</span><span class="p">.</span><span class="nx">keyDownCallback</span><span class="p">[</span><span class="nx">cI</span><span class="p">](</span><span class="nx">event</span><span class="p">,</span> <span class="nx">getActiveKeys</span><span class="p">(),</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC671'>							<span class="nx">killEventBubble</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC672'>						<span class="p">}</span></div><div class='line' id='LC673'>					<span class="p">}</span></div><div class='line' id='LC674'>					<span class="k">if</span><span class="p">(</span><span class="nx">killEventBubble</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC675'>						<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC676'>						<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC677'>					<span class="p">}</span></div><div class='line' id='LC678'>				<span class="p">}</span></div><div class='line' id='LC679'>			<span class="p">}</span></div><div class='line' id='LC680'>		<span class="p">}</span></div><div class='line' id='LC681'>	<span class="p">}</span></div><div class='line' id='LC682'><br/></div><div class='line' id='LC683'>	<span class="cm">/**</span></div><div class='line' id='LC684'><span class="cm">	 * Removes bindings that are no longer satisfied by the active keys. Also</span></div><div class='line' id='LC685'><span class="cm">	 *  fires the key up callbacks.</span></div><div class='line' id='LC686'><span class="cm">	 * @param  {KeyboardEvent}	event</span></div><div class='line' id='LC687'><span class="cm">	 */</span></div><div class='line' id='LC688'>	<span class="kd">function</span> <span class="nx">pruneBindings</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC689'>		<span class="kd">var</span> <span class="nx">bI</span><span class="p">,</span> <span class="nx">cI</span><span class="p">,</span> <span class="nx">binding</span><span class="p">,</span> <span class="nx">killEventBubble</span><span class="p">;</span></div><div class='line' id='LC690'>		<span class="k">for</span><span class="p">(</span><span class="nx">bI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">&lt;</span> <span class="nx">activeBindings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">bI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC691'>			<span class="nx">binding</span> <span class="o">=</span> <span class="nx">activeBindings</span><span class="p">[</span><span class="nx">bI</span><span class="p">];</span></div><div class='line' id='LC692'>			<span class="k">if</span><span class="p">(</span><span class="nx">isSatisfiedCombo</span><span class="p">(</span><span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC693'>				<span class="k">for</span><span class="p">(</span><span class="nx">cI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">&lt;</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">keyUpCallback</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC694'>					<span class="k">if</span> <span class="p">(</span><span class="nx">binding</span><span class="p">.</span><span class="nx">keyUpCallback</span><span class="p">[</span><span class="nx">cI</span><span class="p">](</span><span class="nx">event</span><span class="p">,</span> <span class="nx">getActiveKeys</span><span class="p">(),</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">keyCombo</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC695'>						<span class="nx">killEventBubble</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC696'>					<span class="p">}</span></div><div class='line' id='LC697'>				<span class="p">}</span></div><div class='line' id='LC698'>				<span class="k">if</span><span class="p">(</span><span class="nx">killEventBubble</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC699'>					<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC700'>					<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC701'>				<span class="p">}</span></div><div class='line' id='LC702'>				<span class="nx">activeBindings</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">bI</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC703'>				<span class="nx">bI</span> <span class="o">-=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC704'>			<span class="p">}</span></div><div class='line' id='LC705'>		<span class="p">}</span></div><div class='line' id='LC706'>	<span class="p">}</span></div><div class='line' id='LC707'><br/></div><div class='line' id='LC708'><br/></div><div class='line' id='LC709'>	<span class="c1">///////////////////</span></div><div class='line' id='LC710'>	<span class="c1">// COMBO STRINGS //</span></div><div class='line' id='LC711'>	<span class="c1">///////////////////</span></div><div class='line' id='LC712'><br/></div><div class='line' id='LC713'>	<span class="cm">/**</span></div><div class='line' id='LC714'><span class="cm">	 * Compares two key combos returning true when they are functionally</span></div><div class='line' id='LC715'><span class="cm">	 *  equivalent.</span></div><div class='line' id='LC716'><span class="cm">	 * @param  {String}	keyComboArrayA keyCombo A key combo string or array.</span></div><div class='line' id='LC717'><span class="cm">	 * @param  {String}	keyComboArrayB keyCombo A key combo string or array.</span></div><div class='line' id='LC718'><span class="cm">	 * @return {Boolean}</span></div><div class='line' id='LC719'><span class="cm">	 */</span></div><div class='line' id='LC720'>	<span class="kd">function</span> <span class="nx">compareCombos</span><span class="p">(</span><span class="nx">keyComboArrayA</span><span class="p">,</span> <span class="nx">keyComboArrayB</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC721'>		<span class="kd">var</span> <span class="nx">cI</span><span class="p">,</span> <span class="nx">sI</span><span class="p">,</span> <span class="nx">kI</span><span class="p">;</span></div><div class='line' id='LC722'>		<span class="nx">keyComboArrayA</span> <span class="o">=</span> <span class="nx">parseKeyCombo</span><span class="p">(</span><span class="nx">keyComboArrayA</span><span class="p">);</span></div><div class='line' id='LC723'>		<span class="nx">keyComboArrayB</span> <span class="o">=</span> <span class="nx">parseKeyCombo</span><span class="p">(</span><span class="nx">keyComboArrayB</span><span class="p">);</span></div><div class='line' id='LC724'>		<span class="k">if</span><span class="p">(</span><span class="nx">keyComboArrayA</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="nx">keyComboArrayB</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC725'>		<span class="k">for</span><span class="p">(</span><span class="nx">cI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">&lt;</span> <span class="nx">keyComboArrayA</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC726'>			<span class="k">if</span><span class="p">(</span><span class="nx">keyComboArrayA</span><span class="p">[</span><span class="nx">cI</span><span class="p">].</span><span class="nx">length</span> <span class="o">!==</span> <span class="nx">keyComboArrayB</span><span class="p">[</span><span class="nx">cI</span><span class="p">].</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC727'>			<span class="k">for</span><span class="p">(</span><span class="nx">sI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">sI</span> <span class="o">&lt;</span> <span class="nx">keyComboArrayA</span><span class="p">[</span><span class="nx">cI</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">sI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC728'>				<span class="k">if</span><span class="p">(</span><span class="nx">keyComboArrayA</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">sI</span><span class="p">].</span><span class="nx">length</span> <span class="o">!==</span> <span class="nx">keyComboArrayB</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">sI</span><span class="p">].</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC729'>				<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">keyComboArrayA</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">sI</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC730'>					<span class="k">if</span><span class="p">(</span><span class="nx">keyComboArrayB</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">sI</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">keyComboArrayA</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">sI</span><span class="p">][</span><span class="nx">kI</span><span class="p">])</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC731'>				<span class="p">}</span></div><div class='line' id='LC732'>			<span class="p">}</span></div><div class='line' id='LC733'>		<span class="p">}</span></div><div class='line' id='LC734'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC735'>	<span class="p">}</span></div><div class='line' id='LC736'><br/></div><div class='line' id='LC737'>	<span class="cm">/**</span></div><div class='line' id='LC738'><span class="cm">	 * Checks to see if a key combo string or key array is satisfied by the</span></div><div class='line' id='LC739'><span class="cm">	 *  currently active keys. It does not take into account spent keys.</span></div><div class='line' id='LC740'><span class="cm">	 * @param  {String}	keyCombo	A key combo string or array.</span></div><div class='line' id='LC741'><span class="cm">	 * @return {Boolean}</span></div><div class='line' id='LC742'><span class="cm">	 */</span></div><div class='line' id='LC743'>	<span class="kd">function</span> <span class="nx">isSatisfiedCombo</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC744'>		<span class="kd">var</span> <span class="nx">cI</span><span class="p">,</span> <span class="nx">sI</span><span class="p">,</span> <span class="nx">stage</span><span class="p">,</span> <span class="nx">kI</span><span class="p">,</span> <span class="nx">stageOffset</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">comboMatches</span><span class="p">;</span></div><div class='line' id='LC745'>		<span class="nx">keyCombo</span> <span class="o">=</span> <span class="nx">parseKeyCombo</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">);</span></div><div class='line' id='LC746'>		<span class="k">for</span><span class="p">(</span><span class="nx">cI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">&lt;</span> <span class="nx">keyCombo</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC747'>			<span class="nx">comboMatches</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC748'>			<span class="nx">stageOffset</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC749'>			<span class="k">for</span><span class="p">(</span><span class="nx">sI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">sI</span> <span class="o">&lt;</span> <span class="nx">keyCombo</span><span class="p">[</span><span class="nx">cI</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">sI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC750'>				<span class="nx">stage</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">sI</span><span class="p">]);</span></div><div class='line' id='LC751'>				<span class="k">for</span><span class="p">(</span><span class="nx">kI</span> <span class="o">=</span> <span class="nx">stageOffset</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">&lt;</span> <span class="nx">activeKeys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">kI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC752'>					<span class="nx">index</span> <span class="o">=</span> <span class="nx">stage</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">activeKeys</span><span class="p">[</span><span class="nx">kI</span><span class="p">]);</span></div><div class='line' id='LC753'>					<span class="k">if</span><span class="p">(</span><span class="nx">index</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC754'>						<span class="nx">stage</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC755'>						<span class="nx">stageOffset</span> <span class="o">=</span> <span class="nx">kI</span><span class="p">;</span></div><div class='line' id='LC756'>					<span class="p">}</span></div><div class='line' id='LC757'>				<span class="p">}</span></div><div class='line' id='LC758'>				<span class="k">if</span><span class="p">(</span><span class="nx">stage</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="nx">comboMatches</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="k">break</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC759'>			<span class="p">}</span></div><div class='line' id='LC760'>			<span class="k">if</span><span class="p">(</span><span class="nx">comboMatches</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC761'>		<span class="p">}</span></div><div class='line' id='LC762'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC763'>	<span class="p">}</span></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'>	<span class="cm">/**</span></div><div class='line' id='LC766'><span class="cm">	 * Accepts a key combo array or string and returns a flat array containing all keys referenced by</span></div><div class='line' id='LC767'><span class="cm">	 * the key combo.</span></div><div class='line' id='LC768'><span class="cm">	 * @param  {String}	keyCombo	A key combo string or array.</span></div><div class='line' id='LC769'><span class="cm">	 * @return {Array}</span></div><div class='line' id='LC770'><span class="cm">	 */</span></div><div class='line' id='LC771'>	<span class="kd">function</span> <span class="nx">extractComboKeys</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC772'>		<span class="kd">var</span> <span class="nx">cI</span><span class="p">,</span> <span class="nx">sI</span><span class="p">,</span> <span class="nx">kI</span><span class="p">,</span> <span class="nx">keys</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC773'>		<span class="nx">keyCombo</span> <span class="o">=</span> <span class="nx">parseKeyCombo</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">);</span></div><div class='line' id='LC774'>		<span class="k">for</span><span class="p">(</span><span class="nx">cI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">&lt;</span> <span class="nx">keyCombo</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC775'>			<span class="k">for</span><span class="p">(</span><span class="nx">sI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">sI</span> <span class="o">&lt;</span> <span class="nx">keyCombo</span><span class="p">[</span><span class="nx">cI</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">sI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC776'>				<span class="nx">keys</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">sI</span><span class="p">]);</span></div><div class='line' id='LC777'>			<span class="p">}</span></div><div class='line' id='LC778'>		<span class="p">}</span></div><div class='line' id='LC779'>		<span class="k">return</span> <span class="nx">keys</span><span class="p">;</span></div><div class='line' id='LC780'>	<span class="p">}</span></div><div class='line' id='LC781'><br/></div><div class='line' id='LC782'>	<span class="cm">/**</span></div><div class='line' id='LC783'><span class="cm">	 * Parses a key combo string into a 3 dimensional array.</span></div><div class='line' id='LC784'><span class="cm">	 * - Level 1 - sub combos.</span></div><div class='line' id='LC785'><span class="cm">	 * - Level 2 - combo stages. A stage is a set of key name pairs that must</span></div><div class='line' id='LC786'><span class="cm">	 *  be satisfied in the order they are defined.</span></div><div class='line' id='LC787'><span class="cm">	 * - Level 3 - each key name to the stage.</span></div><div class='line' id='LC788'><span class="cm">	 * @param  {String|Array}	keyCombo	A key combo string.</span></div><div class='line' id='LC789'><span class="cm">	 * @return {Array}</span></div><div class='line' id='LC790'><span class="cm">	 */</span></div><div class='line' id='LC791'>	<span class="kd">function</span> <span class="nx">parseKeyCombo</span><span class="p">(</span><span class="nx">keyCombo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC792'>		<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">keyCombo</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">op</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">ws</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">nc</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">combos</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">combo</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">stage</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">key</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC793'><br/></div><div class='line' id='LC794'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">keyCombo</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">keyCombo</span><span class="p">.</span><span class="nx">push</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">keyCombo</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC795'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">keyCombo</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot parse &quot;keyCombo&quot; because its type is &quot;&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">keyCombo</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;. It must be a &quot;string&quot;.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC796'><br/></div><div class='line' id='LC797'>		<span class="c1">//remove leading whitespace</span></div><div class='line' id='LC798'>		<span class="k">while</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC799'>		<span class="k">while</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC800'>			<span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC801'>				<span class="c1">//white space &amp; next combo op</span></div><div class='line' id='LC802'>				<span class="k">while</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC803'>				<span class="nx">ws</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC804'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;,&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC805'>				<span class="k">if</span><span class="p">(</span><span class="nx">op</span> <span class="o">||</span> <span class="nx">nc</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Failed to parse key combo. Unexpected , at character index &#39;</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC806'>				<span class="nx">nc</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC807'>				<span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC808'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;+&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC809'>				<span class="c1">//next key</span></div><div class='line' id='LC810'>				<span class="k">if</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">stage</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span> <span class="nx">key</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC811'>				<span class="k">if</span><span class="p">(</span><span class="nx">op</span> <span class="o">||</span> <span class="nx">nc</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Failed to parse key combo. Unexpected + at character index &#39;</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC812'>				<span class="nx">op</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC813'>				<span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC814'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;&gt;&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC815'>				<span class="c1">//next stage op</span></div><div class='line' id='LC816'>				<span class="k">if</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">stage</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span> <span class="nx">key</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC817'>				<span class="k">if</span><span class="p">(</span><span class="nx">stage</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">combo</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">stage</span><span class="p">);</span> <span class="nx">stage</span> <span class="o">=</span> <span class="p">[];</span> <span class="p">}</span></div><div class='line' id='LC818'>				<span class="k">if</span><span class="p">(</span><span class="nx">op</span> <span class="o">||</span> <span class="nx">nc</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Failed to parse key combo. Unexpected &gt; at character index &#39;</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC819'>				<span class="nx">op</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC820'>				<span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC821'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;!&#39;</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">||</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;,&#39;</span> <span class="o">||</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;+&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC822'>				<span class="nx">key</span> <span class="o">+=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC823'>				<span class="nx">op</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC824'>				<span class="nx">ws</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC825'>				<span class="nx">nc</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC826'>				<span class="nx">i</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC827'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;+&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;,&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC828'>				<span class="c1">//end combo</span></div><div class='line' id='LC829'>				<span class="k">if</span><span class="p">(</span><span class="nx">op</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="nx">ws</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">||</span> <span class="nx">nc</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC830'>					<span class="k">if</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">stage</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span> <span class="nx">key</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC831'>					<span class="k">if</span><span class="p">(</span><span class="nx">stage</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">combo</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">stage</span><span class="p">);</span> <span class="nx">stage</span> <span class="o">=</span> <span class="p">[];</span> <span class="p">}</span></div><div class='line' id='LC832'>					<span class="k">if</span><span class="p">(</span><span class="nx">combo</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">combos</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">combo</span><span class="p">);</span> <span class="nx">combo</span> <span class="o">=</span> <span class="p">[];</span> <span class="p">}</span></div><div class='line' id='LC833'>				<span class="p">}</span></div><div class='line' id='LC834'>				<span class="nx">op</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC835'>				<span class="nx">ws</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC836'>				<span class="nx">nc</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC837'>				<span class="c1">//key</span></div><div class='line' id='LC838'>				<span class="k">while</span><span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;+&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;,&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC839'>					<span class="nx">key</span> <span class="o">+=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC840'>					<span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC841'>				<span class="p">}</span></div><div class='line' id='LC842'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC843'>				<span class="c1">//unknown char</span></div><div class='line' id='LC844'>				<span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC845'>				<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC846'>			<span class="p">}</span></div><div class='line' id='LC847'>			<span class="c1">//end of combos string</span></div><div class='line' id='LC848'>			<span class="k">if</span><span class="p">(</span><span class="nx">i</span> <span class="o">&gt;=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC849'>				<span class="k">if</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">stage</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span> <span class="nx">key</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC850'>				<span class="k">if</span><span class="p">(</span><span class="nx">stage</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">combo</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">stage</span><span class="p">);</span> <span class="nx">stage</span> <span class="o">=</span> <span class="p">[];</span> <span class="p">}</span></div><div class='line' id='LC851'>				<span class="k">if</span><span class="p">(</span><span class="nx">combo</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">combos</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">combo</span><span class="p">);</span> <span class="nx">combo</span> <span class="o">=</span> <span class="p">[];</span> <span class="p">}</span></div><div class='line' id='LC852'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC853'>			<span class="p">}</span></div><div class='line' id='LC854'>		<span class="p">}</span></div><div class='line' id='LC855'>		<span class="k">return</span> <span class="nx">combos</span><span class="p">;</span></div><div class='line' id='LC856'>	<span class="p">}</span></div><div class='line' id='LC857'><br/></div><div class='line' id='LC858'>	<span class="cm">/**</span></div><div class='line' id='LC859'><span class="cm">	 * Stringifys a key combo.</span></div><div class='line' id='LC860'><span class="cm">	 * @param  {Array|String}	keyComboArray	A key combo array. If a key</span></div><div class='line' id='LC861'><span class="cm">	 *  combo string is given it will be returned.</span></div><div class='line' id='LC862'><span class="cm">	 * @return {String}</span></div><div class='line' id='LC863'><span class="cm">	 */</span></div><div class='line' id='LC864'>	<span class="kd">function</span> <span class="nx">stringifyKeyCombo</span><span class="p">(</span><span class="nx">keyComboArray</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC865'>		<span class="kd">var</span> <span class="nx">cI</span><span class="p">,</span> <span class="nx">ccI</span><span class="p">,</span> <span class="nx">output</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC866'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">keyComboArray</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">keyComboArray</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC867'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">keyComboArray</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">keyComboArray</span><span class="p">.</span><span class="nx">push</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot stringify key combo.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC868'>		<span class="k">for</span><span class="p">(</span><span class="nx">cI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">&lt;</span> <span class="nx">keyComboArray</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">cI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC869'>			<span class="nx">output</span><span class="p">[</span><span class="nx">cI</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC870'>			<span class="k">for</span><span class="p">(</span><span class="nx">ccI</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">ccI</span> <span class="o">&lt;</span> <span class="nx">keyComboArray</span><span class="p">[</span><span class="nx">cI</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">ccI</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC871'>				<span class="nx">output</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">ccI</span><span class="p">]</span> <span class="o">=</span> <span class="nx">keyComboArray</span><span class="p">[</span><span class="nx">cI</span><span class="p">][</span><span class="nx">ccI</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39; + &#39;</span><span class="p">);</span></div><div class='line' id='LC872'>			<span class="p">}</span></div><div class='line' id='LC873'>			<span class="nx">output</span><span class="p">[</span><span class="nx">cI</span><span class="p">]</span> <span class="o">=</span> <span class="nx">output</span><span class="p">[</span><span class="nx">cI</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39; &gt; &#39;</span><span class="p">);</span></div><div class='line' id='LC874'>		<span class="p">}</span></div><div class='line' id='LC875'>		<span class="k">return</span> <span class="nx">output</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">);</span></div><div class='line' id='LC876'>	<span class="p">}</span></div><div class='line' id='LC877'><br/></div><div class='line' id='LC878'><br/></div><div class='line' id='LC879'>	<span class="c1">/////////////////</span></div><div class='line' id='LC880'>	<span class="c1">// ACTIVE KEYS //</span></div><div class='line' id='LC881'>	<span class="c1">/////////////////</span></div><div class='line' id='LC882'><br/></div><div class='line' id='LC883'>	<span class="cm">/**</span></div><div class='line' id='LC884'><span class="cm">	 * Returns the a copy of the active keys array.</span></div><div class='line' id='LC885'><span class="cm">	 * @return {Array}</span></div><div class='line' id='LC886'><span class="cm">	 */</span></div><div class='line' id='LC887'>	<span class="kd">function</span> <span class="nx">getActiveKeys</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC888'>		<span class="k">return</span> <span class="p">[].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">activeKeys</span><span class="p">);</span></div><div class='line' id='LC889'>	<span class="p">}</span></div><div class='line' id='LC890'><br/></div><div class='line' id='LC891'>	<span class="cm">/**</span></div><div class='line' id='LC892'><span class="cm">	 * Adds a key to the active keys array, but only if it has not already been</span></div><div class='line' id='LC893'><span class="cm">	 *  added.</span></div><div class='line' id='LC894'><span class="cm">	 * @param {String}	keyName	The key name string.</span></div><div class='line' id='LC895'><span class="cm">	 */</span></div><div class='line' id='LC896'>	<span class="kd">function</span> <span class="nx">addActiveKey</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC897'>		<span class="k">if</span><span class="p">(</span><span class="nx">keyName</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/\s/</span><span class="p">))</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot add key name &#39;</span> <span class="o">+</span> <span class="nx">keyName</span> <span class="o">+</span> <span class="s1">&#39; to active keys because it contains whitespace.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC898'>		<span class="k">if</span><span class="p">(</span><span class="nx">activeKeys</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC899'>		<span class="nx">activeKeys</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">keyName</span><span class="p">);</span></div><div class='line' id='LC900'>	<span class="p">}</span></div><div class='line' id='LC901'><br/></div><div class='line' id='LC902'>	<span class="cm">/**</span></div><div class='line' id='LC903'><span class="cm">	 * Removes a key from the active keys array.</span></div><div class='line' id='LC904'><span class="cm">	 * @param  {String}	keyNames	The key name string.</span></div><div class='line' id='LC905'><span class="cm">	 */</span></div><div class='line' id='LC906'>	<span class="kd">function</span> <span class="nx">removeActiveKey</span><span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC907'>		<span class="kd">var</span> <span class="nx">keyCode</span> <span class="o">=</span> <span class="nx">getKeyCode</span><span class="p">(</span><span class="nx">keyName</span><span class="p">);</span></div><div class='line' id='LC908'>		<span class="k">if</span><span class="p">(</span><span class="nx">keyCode</span> <span class="o">===</span> <span class="s1">&#39;91&#39;</span> <span class="o">||</span> <span class="nx">keyCode</span> <span class="o">===</span> <span class="s1">&#39;92&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">activeKeys</span> <span class="o">=</span> <span class="p">[];</span> <span class="p">}</span> <span class="c1">//remove all key on release of super.</span></div><div class='line' id='LC909'>		<span class="k">else</span> <span class="p">{</span> <span class="nx">activeKeys</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">activeKeys</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">keyName</span><span class="p">),</span> <span class="mi">1</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC910'>	<span class="p">}</span></div><div class='line' id='LC911'><br/></div><div class='line' id='LC912'><br/></div><div class='line' id='LC913'>	<span class="c1">/////////////</span></div><div class='line' id='LC914'>	<span class="c1">// LOCALES //</span></div><div class='line' id='LC915'>	<span class="c1">/////////////</span></div><div class='line' id='LC916'><br/></div><div class='line' id='LC917'>	<span class="cm">/**</span></div><div class='line' id='LC918'><span class="cm">	 * Registers a new locale. This is useful if you would like to add support for a new keyboard layout. It could also be useful for</span></div><div class='line' id='LC919'><span class="cm">	 * alternative key names. For example if you program games you could create a locale for your key mappings. Instead of key 65 mapped</span></div><div class='line' id='LC920'><span class="cm">	 * to &#39;a&#39; you could map it to &#39;jump&#39;.</span></div><div class='line' id='LC921'><span class="cm">	 * @param  {String}	localeName	The name of the new locale.</span></div><div class='line' id='LC922'><span class="cm">	 * @param  {Object}	localeMap	The locale map.</span></div><div class='line' id='LC923'><span class="cm">	 */</span></div><div class='line' id='LC924'>	<span class="kd">function</span> <span class="nx">registerLocale</span><span class="p">(</span><span class="nx">localeName</span><span class="p">,</span> <span class="nx">localeMap</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC925'><br/></div><div class='line' id='LC926'>		<span class="c1">//validate arguments</span></div><div class='line' id='LC927'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">localeName</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot register new locale. The locale name must be a string.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC928'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">localeMap</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot register &#39;</span> <span class="o">+</span> <span class="nx">localeName</span> <span class="o">+</span> <span class="s1">&#39; locale. The locale map must be an object.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC929'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">localeMap</span><span class="p">.</span><span class="nx">map</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot register &#39;</span> <span class="o">+</span> <span class="nx">localeName</span> <span class="o">+</span> <span class="s1">&#39; locale. The locale map is invalid.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC930'><br/></div><div class='line' id='LC931'>		<span class="c1">//stash the locale</span></div><div class='line' id='LC932'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">localeMap</span><span class="p">.</span><span class="nx">macros</span><span class="p">)</span> <span class="p">{</span> <span class="nx">localeMap</span><span class="p">.</span><span class="nx">macros</span> <span class="o">=</span> <span class="p">[];</span> <span class="p">}</span></div><div class='line' id='LC933'>		<span class="nx">locales</span><span class="p">[</span><span class="nx">localeName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">localeMap</span><span class="p">;</span></div><div class='line' id='LC934'>	<span class="p">}</span></div><div class='line' id='LC935'><br/></div><div class='line' id='LC936'>	<span class="cm">/**</span></div><div class='line' id='LC937'><span class="cm">	 * Swaps the current locale.</span></div><div class='line' id='LC938'><span class="cm">	 * @param  {String}	localeName	The locale to activate.</span></div><div class='line' id='LC939'><span class="cm">	 * @return {Object}</span></div><div class='line' id='LC940'><span class="cm">	 */</span></div><div class='line' id='LC941'>	<span class="kd">function</span> <span class="nx">getSetLocale</span><span class="p">(</span><span class="nx">localeName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC942'><br/></div><div class='line' id='LC943'>		<span class="c1">//if a new locale is given then set it</span></div><div class='line' id='LC944'>		<span class="k">if</span><span class="p">(</span><span class="nx">localeName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC945'>			<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">localeName</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot set locale. The locale name must be a string.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC946'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">locales</span><span class="p">[</span><span class="nx">localeName</span><span class="p">])</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Cannot set locale to &#39;</span> <span class="o">+</span> <span class="nx">localeName</span> <span class="o">+</span> <span class="s1">&#39; because it does not exist. If you would like to submit a &#39;</span> <span class="o">+</span> <span class="nx">localeName</span> <span class="o">+</span> <span class="s1">&#39; locale map for KeyboardJS please submit it at https://github.com/RobertWHurst/KeyboardJS/issues.&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC947'><br/></div><div class='line' id='LC948'>			<span class="c1">//set the current map and macros</span></div><div class='line' id='LC949'>			<span class="nx">map</span> <span class="o">=</span> <span class="nx">locales</span><span class="p">[</span><span class="nx">localeName</span><span class="p">].</span><span class="nx">map</span><span class="p">;</span></div><div class='line' id='LC950'>			<span class="nx">macros</span> <span class="o">=</span> <span class="nx">locales</span><span class="p">[</span><span class="nx">localeName</span><span class="p">].</span><span class="nx">macros</span><span class="p">;</span></div><div class='line' id='LC951'><br/></div><div class='line' id='LC952'>			<span class="c1">//set the current locale</span></div><div class='line' id='LC953'>			<span class="nx">locale</span> <span class="o">=</span> <span class="nx">localeName</span><span class="p">;</span></div><div class='line' id='LC954'>		<span class="p">}</span></div><div class='line' id='LC955'><br/></div><div class='line' id='LC956'>		<span class="c1">//return the current locale</span></div><div class='line' id='LC957'>		<span class="k">return</span> <span class="nx">locale</span><span class="p">;</span></div><div class='line' id='LC958'>	<span class="p">}</span></div><div class='line' id='LC959'><span class="p">});</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.16118s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-5bef6dacd990ce272ec009917ceea0b9d96f84b7.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-b34ff5b5950e79300fa8719b7d4a66b0d8723688.js" type="text/javascript"></script>
      
      
  </body>
</html>

