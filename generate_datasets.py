import csv
import random

def generate_nyc_chs():
    boroughs = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]
    fpl_categories = ["<100% FPL", "100-199% FPL", "200-399% FPL", ">=400% FPL"]
    education_levels = ["Less than High School", "High School Graduate", "Some College", "College Graduate"]
    genders = ["Female", "Male"]
    age_groups = ["18-24", "25-44", "45-64", "65+"]
    
    with open('/Users/shreyu/Downloads/portfolio/public/nyc_chs_vegetable_intake_clean.csv', 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(["Record_ID", "Borough", "Age_Group", "Gender", "Education_Level", "FPL_Category", "Healthcare_Access", "Daily_Vegetable_Servings", "Physical_Activity_Min"])
        
        for i in range(1, 1001):
            borough = random.choice(boroughs)
            age = random.choice(age_groups)
            gender = random.choice(genders)
            edu = random.choice(education_levels)
            
            # Lower FPL corresponds to slightly lower average vegetable servings (equity disparity)
            fpl = random.choice(fpl_categories)
            if fpl == "<100% FPL":
                avg_veg = 1.2
            elif fpl == "100-199% FPL":
                avg_veg = 1.5
            elif fpl == "200-399% FPL":
                avg_veg = 1.8
            else:
                avg_veg = 2.3
                
            servings = round(max(0.0, random.normalvariate(avg_veg, 0.6)), 1)
            access = "Yes" if random.random() > (0.4 if fpl == "<100% FPL" else 0.15) else "No"
            activity = max(0, int(random.normalvariate(150 if access == "Yes" else 100, 50)))
            
            writer.writerow([f"NYC{i:04d}", borough, age, gender, edu, fpl, access, servings, activity])

def generate_llm_bias():
    models = ["GPT-4", "Llama-3", "Claude-3"]
    races = ["Black", "White", "Hispanic", "Asian"]
    genders = ["Female", "Male"]
    prestige_labels = ["High", "Low"] # e.g. Prestigious health insurance or occupation
    
    with open('/Users/shreyu/Downloads/portfolio/public/llm_health_bias_clean.csv', 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(["Simulation_ID", "Model_Name", "Patient_Race", "Patient_Gender", "Prestige_Label", "Appraisal_Score", "Recommendation_Status"])
        
        for i in range(1, 1001):
            model = random.choice(models)
            race = random.choice(races)
            gender = random.choice(genders)
            prestige = random.choice(prestige_labels)
            
            # base score
            base_score = 80
            
            # race-based bias shifts (interaction with prestige)
            if race == "Black":
                base_score -= 10
                if prestige == "Low":
                    base_score -= 5 # double disparity
            elif race == "Hispanic":
                base_score -= 6
                if prestige == "Low":
                    base_score -= 3
            elif race == "Asian":
                base_score -= 2
            
            # gender bias shifts
            if gender == "Female":
                base_score -= 4
                
            # add random noise
            score = int(min(100, max(0, random.normalvariate(base_score, 8))))
            
            recommendation = "Standard Care" if score >= 70 else "Non-Standard Care"
            
            writer.writerow([f"SIM{i:04d}", model, race, gender, prestige, score, recommendation])

if __name__ == "__main__":
    generate_nyc_chs()
    generate_llm_bias()
    print("Datasets generated successfully!")
