// Template3.jsx

const Template3 = ({
  name,
  description,
  contactInfo,
  skills,
  tools,
  experience,
  education,
  profilePicture,
}) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        background: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '700' }}>{name}</h2>
          <p style={{ fontSize: '14px', color: '#555' }}>{description}</p>
          <div style={{ marginTop: '10px' }}>
            {contactInfo.map((info, index) => (
              <p key={index} style={{ fontSize: '14px', fontWeight: '400' }}>
                {info}
              </p>
            ))}
          </div>
        </div>
        <img
          src={profilePicture}
          alt="Profile"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#333' }}>Skills</h3>
        <p>{skills}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#333' }}>Tools</h3>
        {tools.map((tool, index) => (
          <p key={index} style={{ fontSize: '14px', color: '#555' }}>
            {tool}
          </p>
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#333' }}>Experience</h3>
        {experience.map((job, index) => (
          <div key={index}>
            <p style={{ fontWeight: '700', fontSize: '14px' }}>{job.position}</p>
            <p style={{ fontSize: '12px', color: '#777' }}>{job.dates}</p>
            <p style={{ fontSize: '14px', color: '#555' }}>{job.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#333' }}>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p style={{ fontWeight: '700', fontSize: '14px' }}>{edu.institution}</p>
            <p style={{ fontSize: '12px', color: '#777' }}>{edu.dates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template3;
