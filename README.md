# Spatial Intelligence Portfolio

Welcome to my portfolio. Below you can browse my research and project work across remote sensing, geospatial machine learning, multimodal AI, and spatiotemporal analysis.

This portfolio is maintained by [Maanvi Bansal](https://www.linkedin.com/in/maanvibansal).

## About me

<img src="assets/profile-placeholder.svg" align="left" width="220" alt="Replace with a portrait of Maanvi Bansal">

My name is **Maanvi Bansal**, and I am pursuing a Bachelor of Engineering in Electrical Engineering with a minor in Computer Science Engineering at Thapar Institute of Engineering & Technology. My interests lie at the intersection of machine learning, remote sensing, spatial data science, and the evaluation of models under changing geographic conditions.

My research asks how machine-learning systems behave when the source, country, sensor, task, or time changes. I study remote-sensing vision-language models, cross-country domain shift, adaptive pseudo-labeling, and spatiotemporal reasoning using satellite imagery and controlled Blender simulations.

At CNH Industrial, I have worked on satellite-image evaluation and preprocessing pipelines across Sentinel-2, Google Maps, and OpenStreetMap imagery. This work includes field-boundary segmentation, cross-source benchmarking, image fusion, and the analysis of geographic variability across approximately 1,500 farms.

I also enjoy translating research into clear systems and collaborative work. Through product and student-leadership roles at Thapar, I have worked with interdisciplinary teams, mentored students, and helped thousands of applicants navigate admissions and campus onboarding.

View my résumé [here](Maanvi_Bansal_Resume.pdf).

#### Jump to Section

- [VLM-RS Audit: Source-Conditioned Cross-Task Transfer](#vlm-rs-audit-source-conditioned-cross-task-transfer)
- [BEN-DG-10: Cross-Country Dissonance](#ben-dg-10-cross-country-dissonance)
- [4D Blender Spatiotemporal Research](#4d-blender-spatiotemporal-research)
- [Cross-Modality Medical Segmentation](#cross-modality-medical-segmentation)
- [Multi-Source Satellite Imagery Evaluation](#multi-source-satellite-imagery-evaluation)
- [Planned GIS and Spatiotemporal Studies](#planned-gis-and-spatiotemporal-studies)
- [Work Experience](#work-experience)
- [Leadership and Mentorship](#leadership-and-mentorship)
- [Certifications and Skills](#certifications-and-skills)

## VLM-RS Audit: Source-Conditioned Cross-Task Transfer

![Placeholder for VLM-RS audit results or attention maps](assets/vlm-rs-audit-placeholder.svg)

**Research question.** When a remote-sensing vision-language model fails on one task, which parts of its learned understanding remain useful on another?

This study evaluates source-conditioned cross-task transfer in remote-sensing vision-language models. The goal is to separate genuinely reusable spatial understanding from task-specific behavior that may not survive a change in prompt, label space, or source imagery.

**Methods and outputs:**

- Cross-task evaluation of remote-sensing vision-language models
- Source-conditioned comparisons and controlled ablations
- Regional and task-level error analysis
- Visual summaries of transfer, failure, and retained capability

*“When One Answer Breaks, What Survives? Source Conditioned Cross Task Transfer in Remote Sensing VLMs” — with G. S. Madhuri and S. Muhuri; in review at IEEE ICCCI 2026.*

[Return to top](#jump-to-section)

## BEN-DG-10: Cross-Country Dissonance

![Placeholder for BEN-DG-10 maps and country-level comparisons](assets/ben-dg-10-placeholder.svg)

BEN-DG-10 is a benchmark-led investigation of geographic domain shift. It examines how model behavior changes across countries, landscapes, and acquisition conditions, and where a strong average score can hide meaningful local failures.

- Cross-country benchmarking on geographically diverse data
- Country-wise and regional performance disaggregation
- Identification of domain-shift and data-quality failure modes
- Comparison of robustness beyond global averages

*“BEN-10: Cross-Country Dissonance” — with G. S. Madhuri and S. Muhuri; in review at IEEE SISIMPACT.*

[Return to top](#jump-to-section)

## 4D Blender Spatiotemporal Research

### Can vision-language models read the sundial?

![Placeholder for Blender overhead renders and shadow sequences](assets/blender-time-placeholder.svg)

This ongoing project creates a controlled benchmark for time inference from overhead shadows. Two renders of the same static scene are generated at different times of day, allowing a model’s temporal reasoning to be studied without changes in object identity or scene geometry.

Blender makes it possible to control camera pose, lighting, sun position, object placement, and rendering conditions. The planned workflow includes controlled scene construction, matched time-of-day renders, interval estimation, and analysis of shadow geometry.

This research is being conducted under the mentorship of **Dr. Samya Muhuri** at Thapar Institute of Engineering & Technology.

### Spatio-temporal analysis of 4D structures

This companion research direction studies how spatial structure changes over time and how those changes can be represented, compared, and interpreted using Blender and BlenderGIS.

[Return to top](#jump-to-section)

## Cross-Modality Medical Segmentation

![Placeholder for medical segmentation results](assets/medical-segmentation-placeholder.svg)

This work combines adaptive confidence-gated pseudo-labeling with patch-level consistency to improve learning across medical-image modalities when reliable labels are limited.

*“Beyond Fixed Thresholds: Adaptive Confidence-Gated Pseudo-Labeling and Patch Consistency for Cross-Modality Medical Segmentation” — accepted at IPTA 2026; proceedings forthcoming.*

[Return to top](#jump-to-section)

## Multi-Source Satellite Imagery Evaluation

![Placeholder for satellite source comparisons](assets/satellite-evaluation-placeholder.svg)

At CNH Industrial, I am developing a multi-source satellite-imagery evaluation framework for agricultural field-boundary detection. The framework compares Sentinel-2, Google Maps, and OpenStreetMap tiles across geographically diverse agricultural regions.

The pipeline standardizes coordinate reference systems, spatial resolution, bounding boxes, cloud-cover information, revisit cadence, and ingestion quality. Image-fusion variants are evaluated with Intersection over Union, Dice score, and boundary precision and recall.

Earlier work benchmarked SAM, U-Net, and DeepLabV3+ across approximately 1,500 farms and three customer accounts.

[Return to top](#jump-to-section)

## Planned GIS and Spatiotemporal Studies

The final maps and findings will replace the current placeholders when these smaller studies are complete.

### Land-Cover Change Explorer

![GIS project placeholder](assets/gis-study-placeholder.svg)

A compact remote-sensing study comparing seasonal or multi-year imagery and measuring land-cover transitions.

### Flood Exposure Atlas

![GIS project placeholder](assets/gis-study-placeholder.svg)

A GIS analysis combining terrain, settlement, and infrastructure layers under multiple flood scenarios.

### Urban Rhythm Time-Cube

![GIS project placeholder](assets/gis-study-placeholder.svg)

A spatiotemporal visualization of recurring peaks, quiet zones, and unusual temporal patterns.

[Return to top](#jump-to-section)

## Work Experience

### Machine Learning Intern | CNH Industrial

*February 2026 – Present*

- Architecting a multi-source satellite-imagery evaluation framework.
- Developing automated preprocessing pipelines across geographic regions.
- Prototyping image-fusion methods for field-boundary detection.

### Machine Learning Research Summer Intern | CNH Industrial

*June 2025 – August 2025*

- Benchmarked zero-shot and supervised segmentation approaches.
- Conducted model and imagery analysis across three customer accounts and approximately 1,500 farms.

### Product Manager, Student Intern | Thapar Institute

*October 2024 – June 2025*

- Led discovery with more than 50 stakeholders.
- Worked with an eight-member team on requirements, APIs, schemas, edge cases, and dashboards.

[Return to top](#jump-to-section)

## Leadership and Mentorship

![Leadership image placeholder](assets/leadership-placeholder.svg)

### Founding Member and Product Lead | PLEX, TIET

Mentored more than 50 students through workshops, case studies, and hands-on projects.

### Student Mentor | Frosh, Admissions Cell, TIET

Guided more than 3,000 applicants through admissions, enrollment, and campus onboarding.

[Return to top](#jump-to-section)

## Certifications and Skills

### Certifications

- **Hyperspectral Data for Land and Coastal Systems** — NASA ARSET
- **Spatial Data Science: The New Frontier in Analytics** — Esri Training MOOC
- **NOAA’s TEMPO Aerosol Products** — NASA ARSET
- **Flood Mapping with NISAR** — NASA ARSET

### Technical Skills

- **Languages:** C, C++, Python, SQL, R, Assembly, LaTeX
- **Machine Learning:** PyTorch, TensorFlow, NumPy, Matplotlib, scikit-learn, Pandas, PySpark, CUDA
- **Geospatial and 3D:** ArcGIS Pro, QGIS, Blender, BlenderGIS
- **Tools and Cloud:** Linux, Ubuntu/WSL, Kali Linux, Azure DevOps

## Contact

Email: [bansalmaanvi15@gmail.com](mailto:bansalmaanvi15@gmail.com)

LinkedIn: [linkedin.com/in/maanvibansal](https://www.linkedin.com/in/maanvibansal)

[Return to top](#spatial-intelligence-portfolio)
