lga
=====
attempt to code local-global alignment as described [here](http://nar.oxfordjournals.org/content/31/13/3370.full.pdf+html) and [here](http://predictioncenter.org/casp/casp7/public/doc/LCS_GDT.README). lga scoring function is implemented explicitly as described in the first source. lcs cutoffs for the implementation are 1A, 2A, 5A. gdt cutoffs are 0.5A to 10A inclusively, with step equal to 0.5A. this module exposes single function, with signature _(protein1, protein2, w)_, where:

 * _protein1_ and _protein2_ are arrays of protein coordinates, in format:

```javascript
[
  [x1, y1, z1],
  [x2, y2, z2],
       ...
]
```

 * _w_ is weight. processed lcs and gdt scores need to be multiplied by _(1 - w)_ and _w_, respectively. 

the output of this program is sole floating-point number - lga score.

please check your arguments before using it!