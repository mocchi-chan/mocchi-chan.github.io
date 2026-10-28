# Homepage research images

The homepage reads its project order, text, and image paths from `_data/research.yml`.
Images are shown in a vertical feed, with two stacked images for the TLVR control work.

| File | Content | Original source |
| --- | --- | --- |
| `tlvr-prototype.png` | TLVR hardware prototype | APEC 2026 compensation-winding-current-based COT paper, Fig. 8 (board view) |
| `tlvr-control-fig3.png` | Conventional and proposed control diagrams | Same paper, Fig. 3 (both panels) |
| `sc-zb-tlvr-fig9.png` | Top and bottom views of the SC-ZB-TLVR prototype | APEC 2026 series-capacitor zero-bias TLVR paper, Fig. 9 |
| `hsc-vrm-prototype.png` | HSC-VRM hardware photograph | APEC 2024 ZVS intermediate voltage rails paper, Fig. 10 |
| `ibc-preview.png` | Future intermediate bus converter image | Not added yet; the page currently shows an image placeholder |

To add the IBC image, place a PNG named `ibc-preview.png` in this directory.
The next site build replaces the placeholder automatically. The text remains
"Coming soon." until it is edited in `_data/research.yml`.

The extracted figures retain their original technical labels. Images link to
their full-resolution copies. Paper links use the existing publication records:
eScholarship PDFs for the 2026 work and the repository PDF for the 2024 work.
