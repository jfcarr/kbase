# Hide website from search engines

## Robots.txt

Sometimes when you're developing a new web site, you may not have the site secured, but you may still not want it to be indexed by search engines. The quickest way to hide a site from all search engines is to create a robots.txt file with the following contents:

robots.txt
```txt
User-agent: *
Disallow: /
Disallow: /cgi-bin/
```

...then place the robots.txt file in the same location as your index.html. Once you're ready to make your site visible to the search engines, either remove the robots.txt file, or adjust its contents as needed.

## Links

McAnerin International has put together a very handy online tool to simplify building a robots.txt file. You can access it [here](http://www.mcanerin.com/EN/search-engine/robots-txt.asp).

There's also a comprehensive article detailing various ways to hide content from search engines [here](http://moz.com/blog/12-ways-to-keep-your-content-hidden-from-the-search-engines).
