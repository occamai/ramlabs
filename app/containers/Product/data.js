import data_1_a from '../../images/new_billion_scale.png';
import data_1_b from '../../images/Chip-e1518601899365-no5fx2j0hnpezo5l54hrjzg1usqhw6yt4b2055cpgo.png';
import data_1_video from '../../images/farmers.mp4';
import data_1_chip from '../../images/GSI_chip_clip.png';
import data_2_a from '../../images/PgIsmkx.jpg';
import data_2_pipeline from '../../images/pipeline2.png'
import data_2_molecules from '../../images/molecules.jpg'
import data_2_latency from '../../images/fastmol.png'
import data_2_leader from '../../images/leader.jpg'

export const DATA = [
  {
    "id": 1,
    "main_image": data_1_a,
    "product": {
      "title": "Edge AI Computing-Based",
      "sub_title": "Smart City Solutions",
      "description": "Empowering smart cities with AI capabilities has become an inevitable trend as technologies develop.With Horizon's proprietary edge AI computing and superior deep learning algorithms, AI computations can be achieved at edge in forms of video structuring industrial PCs or a full stack smart city solution that provides ultimate efficiency in both power consumption and cost while sustaining a high performance.",
    },
    "techincal": {
      "title": "Technical Advantages",
      "advantage": [
        {
          "img": data_1_a,
          "title": "High-performance",
          "description": "Deep learning based visual identification, and quick matching with the target library; Maximum resolution 2M（1920×1080@30fps）"
        },
        {
          "img": data_1_a,
          "title": "Low-cost",
          "description": "Supports front-end database"
        },
        {
          "img": data_1_a,
          "title": "Low power consumption",
          "description": "Equipped with Horizon's edge AI computing, providing deep learning algorithms-based features."
        },
        {
          "img": data_1_a,
          "title": "Multiple levels",
          "description": "Supporting 3D digital noise reduction, ultra-wide dynamic, automatic electronic shutter; supporting PoE power supply"
        }
      ]
    },
    "middle": {
      "title": "Intelligent Traffic Platform",
      "content": [
        {
          "img": data_1_b,
          "title": "Traffic violation analysis",
          "description": "Through automatically detecting, capturing and obtaining evidence, it assists in analysis traffic violations such as running red lights, prohibited cornering and line crossing, going in the wrong direction and illegal parking."
        },
        {
          "img": data_1_b,
          "title": "Intelligence analysis",
          "description": "It enables tracking and behavior analysis of particular vehicle targets, detects illegal behaviors such as vehicles with counterfeit registration plates, and provides accompanying vehicle analysis, correlation analysis and general vehicle surveillance."
        },
        {
          "img": data_1_b,
          "title": "Road condition analysis",
          "description": "Based on the vehicle capture, it provides traffic congestion detection, traffic anomaly analysis, and traffic condition analysis."
        },
        {
          "img": data_1_b,
          "title": "Big data analysis",
          "description": "Based on the analysis of big data in traffic scenarios, it is able to predict road condition changes, analyze urban functional zones, and assist in urban traffic road planning."
        }
      ]
    },
    "video": {
      "title": "Video Structuring",
      "content": "Based on the deep learning technologies, it detects, captures, tracks, and identifies pedestrians and vehicles in every frame of the video, and converts non-structured video data to structured analytical data of different types of road users.",
      "image": data_1_a,
      "url": data_1_video
    }
  },
  {
    "id": 2,
    "main_image": data_2_a,
    "product": {
      "title": "Computational Drug Discovery",
      "sub_title": "Small Molecule Search",
      "description": "\"By dramatically reducing the time required to search our small-molecule database, GSI’s Gemini empowers us to advance our research processes and ultimately improve human health.\" --Efrat Ben-Zeev, Computational Chemist and Cheminformatics Project Leader Weizmann Institute of Science.",
    },
    "techincal": {
      "title": "Our Advantage",
      "advantage": [
        {
          "img": data_2_latency,
          "title": "Low Latency",
          "description": "1 Gemini board can search millions of molecule fingerprints in milli-seconds."
        },
        {
          "img": data_2_molecules,
          "title": "High Throughput",
          "description": "Gemini can search many queries similtaneously."
        },
        {
          "img": data_2_pipeline,
          "title": "Application Integration",
          "description": "GSI provides software plugins to all the major life science pipelines including Biovia Pipeline Pilot and KNIME."
        },
        {
          "img": data_2_leader,
          "title": "Industry Leader",
          "description": "Our similarity search hardware accelerator is being used by the biggest names in biopharma including the Weizmann Institute."
        }
      ]
    },
    "middle": {
      "title": "Molecule Search In Milli-Seconds",
      "content": [
        {
          "img": data_1_b,
          "title": "Resources",
          "description": "Learn more about molecule search..."
        },
        {
          "img": data_1_b,
          "title": "Customer Stories",
          "description": "Here from our customers..."
        },
        {
          "img": data_1_b,
          "title": "Blog",
          "description": "Learn more about our approach..."
        },
        {
          "img": data_1_b,
          "title": "Events",
          "description": "Upcoming events..."
        }
      ]
    },
    "video": {
      "title": "Challenges",
      "content": "Pharmaceutical manufacturers are under constant pressure to fast-track innovation and increase the speed at which they introduce successful drugs to market. Various scientific advances are fueling a fresh wave of pharmaceutical manufacturing innovation. These advances are supported by the U.S. Food and Drug Administration (FDA), which is helping accelerate the industry’s throughput of lifesaving medicines and therapeutics by taking a more pragmatic approach to regulation.  Many institutions estimate the cost of developing a successful first-in-class therapy at more than $2 billion. To lower that cost, companies must optimize every aspect of development and manufacturing.",
      "image": data_1_a,
      "url": data_1_video
    },
    "solution": {
	"title": "Our Solution",
	"content":"Our approach to this problem is based on hardware acceleration. We have built a custom chip that can accelerate many types of search including molecule search. We provide PCIe boards that etc etc etc etc etc.",
	"image": data_1_chip,
	"url": data_1_video 
    },
    "challenge": {
	"title": "Challenges in Drug Discovery",
	"content":"Pharmaceutical manufacturers are under constant pressure to fast-track innovation and increase the speed at which they introduce successful drugs to market. Various scientific advances are fueling a fresh wave of pharmaceutical manufacturing innovation. These advances are supported by the U.S. Food and Drug Administration (FDA), which is helping accelerate the industry’s throughput of lifesaving medicines and therapeutics by taking a more pragmatic approach to regulation.  Many institutions estimate the cost of developing a successful first-in-class therapy at more than $2 billion. To lower that cost, companies must optimize every aspect of development and manufacturing.",
	"image": data_1_a,
	"url": data_1_video 
    }
  }
]
