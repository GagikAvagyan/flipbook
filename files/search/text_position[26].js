positionForPages[26]={"page":26,"positions":[{"word":"SECURITY MATTERS: 25+ Tips to Keep ","left":0.294013,"top":0.937013,"width":0.297567,"height":0.012000},{"word":"26","left":0.871168,"top":0.938857,"width":0.026143,"height":0.012420},{"word":"Your WordPress Secure","left":0.293380,"top":0.951378,"width":0.192283,"height":0.008800},{"word":"WordPress integrates both feeds by default, and you may consider disabling them ","left":0.103569,"top":0.095131,"width":0.801070,"height":0.014703},{"word":"to minimize the risk of compromising your website. It can be done by adding code ","left":0.103010,"top":0.115133,"width":0.801660,"height":0.014869},{"word":"manually to your website or using a plugin. ","left":0.104382,"top":0.135618,"width":0.406783,"height":0.014551},{"word":"To disable the features manually, add the following lines to your active theme\u2019s","left":0.103449,"top":0.174692,"width":0.794806,"height":0.014702},{"word":"functions.php file: ","left":0.103225,"top":0.194693,"width":0.180002,"height":0.014718},{"word":"function disable_feed() {","left":0.117025,"top":0.241100,"width":0.235224,"height":0.015761},{"word":" wp_die( __( \u2018This site does not have a feed, visit the <a href=\u201d\u2019. esc_url( home_url(","left":0.116403,"top":0.271352,"width":0.769955,"height":0.015761},{"word":" ","left":0.116403,"top":0.313902,"width":0.005314,"height":0.000015},{"word":"\u2018/\u2019 ) ) .\u2019\u201d>home page</a>!\u2019 ) );","left":0.121653,"top":0.301604,"width":0.259389,"height":0.015761},{"word":"}","left":0.116596,"top":0.332371,"width":0.006364,"height":0.014491},{"word":"add_action(\u2018do_feed\u2019, \u2018disable_feed\u2019, 1);","left":0.117539,"top":0.362108,"width":0.371889,"height":0.015761},{"word":"add_action(\u2018do_feed_rdf\u2019, \u2018disable_feed\u2019, 1);","left":0.117539,"top":0.392361,"width":0.411024,"height":0.015761},{"word":"add_action(\u2018do_feed_rss\u2019, \u2018disable_feed\u2019, 1);","left":0.117539,"top":0.422613,"width":0.412929,"height":0.015761},{"word":"add_action(\u2018do_feed_rss2\u2019, \u2018disable_feed\u2019, 1);","left":0.117539,"top":0.452865,"width":0.425601,"height":0.015761},{"word":"add_action(\u2018do_feed_atom\u2019, \u2018disable_feed\u2019, 1);","left":0.117539,"top":0.483117,"width":0.433001,"height":0.015761},{"word":"add_action(\u2018do_feed_rss2_comments\u2019, \u2018disable_feed\u2019, 1);","left":0.117539,"top":0.513369,"width":0.540789,"height":0.015761},{"word":"add_action(\u2018do_feed_atom_comments\u2019, \u2018disable_feed\u2019, 1);","left":0.117539,"top":0.543621,"width":0.548715,"height":0.015761},{"word":"As a precaution, make sure to back up your website before adding the code. This ","left":0.103226,"top":0.581414,"width":0.801450,"height":0.014703},{"word":"way, you can easily restore it in case the code is not inserted correctly and breaks ","left":0.103376,"top":0.601734,"width":0.801359,"height":0.014551},{"word":"your website.","left":0.103160,"top":0.621902,"width":0.125119,"height":0.014551},{"word":"A much safer and easier way to disable RSS and Atom feeds is using a plugin. The ","left":0.103225,"top":0.660972,"width":0.801499,"height":0.014703},{"word":"Security Optimizer plugin allows you to do that with a single click. Navigate to the SG ","left":0.103653,"top":0.681287,"width":0.801000,"height":0.014551},{"word":"Security section in your website\u2019s dashboard > Site Security and turn on the option ","left":0.103653,"top":0.701450,"width":0.800998,"height":0.014551},{"word":"Disable RSS and ATOM Feeds.","left":0.104275,"top":0.721613,"width":0.288814,"height":0.011481}]};