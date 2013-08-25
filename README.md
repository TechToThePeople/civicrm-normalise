civicrm-normalise
=================

normalise the data entered in several fields. So far firstname, last name... so they are Properly Capitalised

What does it do?
--------------

It modifies profiles and the normal contact edit/add so when you type (or paste) XAV as the first name, it converts it into Xav

The rule is simple: as long as there is at least one uppercase char and at least one lowercase one (mixed cases), it's good enough and happy.

It allows to deal with "Anne-Sophie" or "van Den Dach" or "Van Den Dach" (or whatever crazy combination, depending of the country, the way of writing it is different)

Or nobility, or whatever. People are complicated. Bottom line, it avoid the ALL CAP name and the lowercase one too.

For imports (or api) it obviously can't suggest the case, so it puts the first letter in uppercase and the rest in lowercase. It's not perfect, but better than nothing.


Todo/future
---------

Do the same with the phone numbers. Extra fun: each org seems to have a different way of typing correct numbers. The standard is to always put +country code at the start. So +41 in front of a swiss number +1 for a US one.

